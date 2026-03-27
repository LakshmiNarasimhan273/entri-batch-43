import React from 'react'

function Button(props) {
  return (
    <div>
        <button onClick={props.logic} style={{backgroundColor: "black", borderRadius: '8px', color: "white", cursor: 'pointer'}}>{props.name}</button>
    </div>
  )
}

export default Button