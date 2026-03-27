import React from 'react'

function Login(props) {
  return (
    <div>
        {
            props.user.loginStatus ? (
                <div>
                    <h1>{props.user.username}</h1>
                    <p>{props.user.useremail}</p>
                </div>
            ) : (
                <h1>Please Login</h1>
            )
        }
    </div>
  )
}

export default Login