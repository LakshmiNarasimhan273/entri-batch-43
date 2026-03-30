import React from 'react'

function Navbar() {
  return (
    <nav className='bg-gray-100 shadow-lg p-4'>
        <div className='container mx-auto flex justify-between items-center'>

            <div className='text-blue-600 font-bold text-2xl'>Entri</div>

            <div className='flex gap-4 font-semibold text-gray-700'>
                <a href="#">Home</a>
                <a href="#">Courses</a>
                <a href="#">Support</a>
            </div>

        </div>
    </nav>
  )
}

export default Navbar