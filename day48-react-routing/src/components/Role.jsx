import React from 'react'

function Role(props) {
  return (
    <div className='text-white text-center text-xs px-3 py-1 bg-purple-600 rounded-full mt-2'>
      {props.role}
    </div>
  )
}

export default Role