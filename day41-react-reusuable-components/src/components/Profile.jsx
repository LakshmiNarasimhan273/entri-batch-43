import React from 'react'

function Profile(props) {
  return (
    <div>
        <h3>Name: {props.userData.username}</h3>
        <h6>Email: {props.userData.useremail}</h6>
        <p>Status: {props.userData.status ? "Online" : "Offline"}</p>
    </div>
  )
}

export default Profile