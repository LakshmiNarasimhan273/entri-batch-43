import React from 'react'
import Message from './components/Message'
import Header from './components/Header'
import Profile from './components/Profile'
import Status from "./components/Status";
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {

  const user1 = {
    username: "Narasimhan",
    useremail: "narasimhan@mail.com",
    status: false,
    loginStatus: true
  }

  const user2 = {
    username: "Someone",
    useremail: "someone@mail.com",
    status: true
  }

  const userData = {
    name: "Narasimhan",
    role: "lead", // developer, lead, manager
    loginStatus: true
  }

  // developer: "submit code",
  // lead: "create task, approve",
  // manager: "create task, delete task, approve"

  return (
    <div>
      <Header />
      <Message />
      <Profile userData = {user1} />
      <Profile userData = {user2} />
      <Status test={false} />

      <Login user={user1} />
      <br /><br />

      <h1>Dashboard</h1>
      <Dashboard data = {userData} />
    </div>
  )
}

export default App