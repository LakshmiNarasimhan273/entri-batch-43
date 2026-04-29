import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("https://fakestoreapi.com/products");
                setProducts(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        fetchProducts();
    }, []);

    if(!products){
        return(
            <h1>Loading...</h1>
        )   
    }

    return (
        <div className='p-6'>
            <h1 className='text-xl text-center font-semibold'>All Products</h1>

            <div className='mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    products.map(data => (
                        <div className='bg-slate-800 text-white p-2 rounded-lg' key={data.id}>
                            <h4>{data.title}</h4>
                            <p>{data.price}</p>
                            <p>{data.category}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products