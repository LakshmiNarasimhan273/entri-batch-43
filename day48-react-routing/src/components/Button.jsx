import React from 'react'

function Button(props) {
  return (
    <div>
      <button onClick={props.action} className={`px-4 py-2 rounded-lg text-sm font-medium text-white cursor-pointer ${props.type === "primary" ? "bg-purple-600" : props.type === "secondary" ? "bg-gray-500" : "bg-red-500" } `}>{props.label}</button>
    </div>
  )
}

export default Button