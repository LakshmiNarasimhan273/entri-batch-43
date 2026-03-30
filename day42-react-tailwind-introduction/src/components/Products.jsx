import React from 'react'

function Products() {
  return (
    <div className='min-h-screen bg-gary-100 p-6'>
        <h1 className='text-3xl font-bold text-center mb-8'>All Products</h1>
        
        {/* GRID System for responsive card section */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>

            {/* Card 1 */}
            <div className='bg-white rounded-2xl shadow-md overflow-hidden'>
                <img src="https://i.pinimg.com/1200x/75/64/a4/7564a46db35bcb55cfabe5953b98f2eb.jpg" className='w-full h-48 object-cover' alt="" />

                <div className='p-4'>
                    <h2 className='text-lg font-bold mb-2'>Mountain Painting</h2>
                    <p className='text-orange-600 font-semibold text-lg mb-4'>$500</p>
                    <button className='w-full bg-blue-500 text-white py-2 rounded-lg'>Buy now</button>
                </div>
            </div>

            {/* Card 2 */}

            <div className='bg-white rounded-2xl shadow-md overflow-hidden'>
                <img src="https://i.pinimg.com/736x/4b/12/b4/4b12b4454feccf75c0cee96d5425ec2a.jpg" className='w-full h-48 object-cover' alt="" />

                <div className='p-4'>
                    <h2 className='text-lg font-bold mb-2'>Camp Fire</h2>
                    <p className='text-orange-600 font-semibold text-lg mb-4'>$100</p>
                    <button className='w-full bg-blue-500 text-white py-2 rounded-lg'>Buy now</button>
                </div>
            </div>

            {/* Card 3 */}

            <div className='bg-white rounded-2xl shadow-md overflow-hidden'>
                <img src="https://i.pinimg.com/1200x/c7/a2/b4/c7a2b4919e28f55c133faf5260aacc82.jpg" className='w-full h-48 object-cover' alt="" />

                <div className='p-4'>
                    <h2 className='text-lg font-bold mb-2'>Landscape</h2>
                    <p className='text-orange-600 font-semibold text-lg mb-4'>$300</p>
                    <button className='w-full bg-blue-500 text-white py-2 rounded-lg'>Buy now</button>
                </div>
            </div>

            {/* Card 4 */}

            <div className='bg-white rounded-2xl shadow-md overflow-hidden'>
                <img src="https://i.pinimg.com/1200x/49/dc/61/49dc61147e167cac642dd852181dc152.jpg" className='w-full h-48 object-cover' alt="" />

                <div className='p-4'>
                    <h2 className='text-lg font-bold mb-2'>Sunset</h2>
                    <p className='text-orange-600 font-semibold text-lg mb-4'>$350</p>
                    <button className='w-full bg-blue-500 text-white py-2' style={{borderRadius: "16px"}}>Buy now</button>
                </div>
            </div>

        </div>


    </div>
  )
}

export default Products