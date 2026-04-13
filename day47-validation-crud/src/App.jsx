import axios from 'axios';
import React, { useEffect, useState } from 'react'

function App() {

  // hooks configuration
  // useState - for storing the datas
  // useEffect - for making https request
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    username: "",
    email: "",
    status: "Present"
  });
  /*

   const form = {
   username:,
   email:,
   status
   }
   */

   const [editId, setEditId] = useState(null);
   const [errors, setErrors] = useState({});

   const API = "http://localhost:3001/users";

  //  Fetch users
  const getUsers = async () => {
    const response = await axios.get(API);
    setUsers(response.data);
  }

  const validate = () => {
    let err = {};

    // ❗in this name pattern i forgot to add a space at last
    // it causes the validation error and it stops our edit api
    const namePattern = /^[A-Za-z ]{3,}$/;
    const emailPattern = /^[A-Za-z0-9]+@[a-z]+\.[a-z]{2,}$/;

    if(!namePattern.test(form.username)){
      err.nameError = "Username must be at least of 3 letters";
    }

    if(!emailPattern.test(form.email)){
      err.email = "Invalid email format";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  }

  useEffect(() => {
    getUsers()
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!validate()) return;

    if(editId){
      // update api
      await axios.put(`${API}/${editId}`, form);
      setEditId(null);
    }else{
      // post api
      await axios.post(API, form)
    }
    setForm({username: "", email: "", status: "Present"});
    getUsers();

  }

  const handleEdit = (user) => {
    setForm(user);
    setEditId(user.id);
    console.log(editId)
  }

  const deleteUser = async (id) => {
    await axios.delete(`${API}/${id}`);
    getUsers();
  }

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center p-6'>
      <h1 className='text-2xl font-bold mb-4'>Employee Attendance Application</h1>

      <form onSubmit={handleSubmit} className='bg-white p-4 rounded shadow w-full max-w-md'>
        <input value={form.username} onChange={(e) => setForm({...form, username: e.target.value})} className='w-full mb-2 p-2 border rounded' type="text" placeholder='Username' />
        {errors.nameError && (
          <p className='text-red-500 text-sm'>{errors.nameError}</p>
        )}
        <input value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className='w-full mb-2 p-2 border rounded' type="text" placeholder='Email' />
        {
          errors.email && (
            <p className='text-red-500 text-sm'>{errors.email}</p>
          )
        }
        <select value={form.status} onChange={(e) => setForm({...form, status: e.target.value})} className='w-full mb-2 p-2 border rounded'>
          <option>Present</option>
          <option>Absent</option>
        </select>

        <button className='bg-green-700 font-semibold text-white px-4 py-2 rounded w-full cursor-pointer'>
          { editId ? "Update User" : "Add User" }
        </button>
      </form>

    {/* User List */}
      <div className='mt-6 w-full max-w-md'>
        {
          users.map(data => (
            <div className='bg-white p-4 mb-3 rounded shadow-md flex justify-between items-center' key={data.id}>
              <div>
                <h2 className='font-semibold'>{data.username}</h2>
                <p className='text-sm text-gray-600'>{data.email}</p>
                <span 
                className={`text-xs px-2 py-1 rounded ${data.status === "Present" ? "bg-green-200" : "bg-red-200"}`}>{data.status}</span>
              </div>
              <div className='space-x-2'>
                <button onClick={() => handleEdit(data)} className='bg-yellow-500 px-2 py-1 text-sm cursor-pointer rounded'>Edit</button>
                <button onClick={() => deleteUser(data.id)} className='bg-red-500 px-2 py-1 text-sm cursor-pointer rounded'>Delete</button>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default App

