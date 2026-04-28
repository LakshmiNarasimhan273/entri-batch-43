import React, { useState } from 'react'
import { addNote } from '../redux/notesSlice';
import { useDispatch } from 'react-redux';

function NotesForm() {
  // useState
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: ""
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    const newNote = {
      ...form,
      id: Date.now()
    }

    dispatch(addNote(newNote));
    setForm({title: "", description: "", category: ""});
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='bg-gray-100 shadow-lg rounded-xl p-6 mb-8'>
        <h2 className='text-xl font-semibold mb-4'>Create your Note</h2>
        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className='w-full border p-2 rounded mb-3'
          placeholder='Notes Title'
          type="text" />

        <textarea
          value={form.description}
          placeholder='Notes Description'
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className='w-full border p-2 rounded mb-3' name="" id=""></textarea>

        <input
          value={form.category}
          placeholder='Notes Category'
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className='w-full border p-2 rounded mb-3' type="text" />

        <button className='bg-purple-600 text-white px-4 py-2 rounded cursor-pointer'>Add Note</button>
      </form>
    </div>
  )
}

export default NotesForm