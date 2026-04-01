import React from 'react'

function Avatar(props) {
  console.log(props);
  return (
    <div className='relative'>
      <img src={props.image} alt="" className='w-24 h-24 rounded-full object-cover' />

      {
        props.online && (
          <span className='absolute w-4 h-4 bottom-1 right-1 bg-green-500 rounded-full border-2 border-green-300'></span>
        )
      }

    </div>
  )
}

export default Avatar;