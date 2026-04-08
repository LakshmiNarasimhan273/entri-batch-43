import React, { useState } from 'react'

function Basic() {
    const[message, setMessage] = useState("Please Login");
    // const message = "Please login";

    const login = () => {
        setMessage("Welcome back, Admin");
    }

  return (
    <div>
        <h1>{message}</h1>
        <button className='bg-blue-500 px-3 py-1' onClick={login}>Login</button>
    </div>
  )
}

export default Basic