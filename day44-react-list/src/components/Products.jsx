import React from 'react'
import { products } from '../data'

function Products() {
    // js logics
    const addtoCart = (name) => {
        alert(`${name} Added to your Cart`);
    }
  return (
    <div className='p-6'>
        <div className='grid grid-cols-4 gap-6'>
            {
                products.map((data) => (
                    // Card design
                    <div className='border rounded-xl p-4 shadow'>
                        <img className='w-full h-48 object-cover rounded-md mb-3' src={data.image} alt="" />

                        <h3 className='text-lg font-bold'>{data.name}</h3>
                        <p className='text-blue-600 font-semibold'>{data.price}</p>
                        <button onClick={() => addtoCart(data.name)} className='bg-blue-600 text-white px-4 py-2 rounded w-full'>Add to Cart</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Products