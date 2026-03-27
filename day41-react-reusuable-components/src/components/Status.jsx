import React from 'react'

function Status(props) {
  return (
    <div>
      {
        props.test ? <h1>Online</h1> : <h1>Offline</h1>
      }
    </div>
  )
}

export default Status