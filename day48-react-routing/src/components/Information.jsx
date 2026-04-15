import React from 'react'

function Information(props) {
  return (
    <div>
      <p className='text-sm text-gray-500'>{props.label}</p>
      <p className='text-sm font-medium'>{props.value}</p>
    </div>
  )
}

export default Information