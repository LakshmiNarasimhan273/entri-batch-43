import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='bg-gray-200 p-6'>
        <div className='flex items-center justify-between'>
            <div className='font-bold text-xl'>MyWeb</div>

            <ul className='flex gap-6'>
                <li className='font-semibold cursor-pointer'>
                    <Link to="/">Home</Link>
                </li>
                <li className='font-semibold cursor-pointer'>
                    <Link to="/products">Products</Link>
                </li>
                <li className='font-semibold cursor-pointer'>
                    <Link to="/my-profile">Profile</Link>
                </li>
                <li className='font-semibold cursor-pointer'>
                    <Link to="/support">Support</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar