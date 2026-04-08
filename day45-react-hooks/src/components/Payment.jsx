import React, { useState } from 'react'

function Payment() {
    const[status, setStatus] = useState(false);

    const makePayment = () => {
        setStatus(true);
    }
  return (
    <div className='mt-5'>
        {
            status ? (
                <p className='text-3xl font-bold px-8 py-3 rounded-lg text-green-600 bg-green-200'>Payment Successful</p>
            ) : (
                <p className='text-3xl font-bold px-8 py-3 rounded-lg text-red-600 bg-red-200'>Payment not successful</p>
            )
        }
        <button className='bg-blue-200 text-blue-600 font-bold px-6 py-2 mt-3' onClick={makePayment}>Pay now</button>
    </div>
  )
}

export default Payment