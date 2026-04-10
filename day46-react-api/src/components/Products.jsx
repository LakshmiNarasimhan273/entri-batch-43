import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Products() {

    const [products, setProducts] = useState([]);

    // useEffect(() => { // mount
    //     fetch("https://dummyjson.com/products").then(response => {
    //         return response.json();
    //     }).then(data => {
    //         setProducts(data);
    //         console.log(data);
    //     })
    // }, []) // unmount

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(response => {
                setProducts(response.data.products);
            })
    }, []);

    console.log(products);

    return (
        <div className='min-h-screen bg-gray-100 p-6'>
            <h1 className='text-3xl font-semibold text-center mb-8'>Products page</h1>

            {/* parent div - GRID */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

                {
                    products.map(data => (
                        <div 
                        className='bg-white rounded-2xl shadow-md p-4 flex flex-col'
                         key={data.id}>
                            <div className='h-40 flex items-center justify-center'>
                                <img className='h-full object-contain' src={data.thumbnail} alt="" />
                            </div>
                            <h2 className='text-lg font-semibold line-clamp-2 mt-4'>{data.title}</h2>
                            <p className='text-sm text-gray-500 mt-1'>{data.category}</p>
                            <p className='text-xl font-semibold text-green-600 mt-1'>${data.price}</p>
                            <p className='text-sm text-yellow-500 mt-1'>{data.rating}</p>
                            <button className='mt-3 bg-blue-600 text-white py-1 px-4 rounded-lg'>Add to Cart</button>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Products