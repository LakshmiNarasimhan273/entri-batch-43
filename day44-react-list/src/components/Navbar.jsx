import React from 'react'
import { navLinks } from '../data'

function Navbar() {
    console.log(navLinks);
    // js logic
    // forEach applicable
    return (
        <nav className='bg-gray-800 text-white flex justify-between items-center p-4'>
            <h1 className='text-xl fw-bold'>Entri</h1>

            <ul className='flex gap-6'>
                {
                    navLinks.map((data) => (
                        <li key={data.id} className='cursor-pointer'>{data.link}</li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar