import React, { useState } from 'react'

function Counter() {
    const[count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

  return (
    <div className='flex flex-col items-center justify-center h-[300px]'>
        <div>
            <p className='font-bold text-4xl bg-blue-200 text-blue-600 px-6 rounded-lg py-2'>{count}</p>
        </div>
        <div className='flex gap-4 mt-6'>
            <button onClick={increment} className='px-4 py-1 rounded-lg cursor-pointer font-semibold bg-green-200 text-green-600'>Increment</button>
            <button disabled={count === 0} onClick={decrement} className='px-4 py-1 rounded-lg cursor-pointer font-semibold bg-orange-200 text-orange-600'>Decrement</button>
            <button onClick={reset} className='px-4 py-1 rounded-lg cursor-pointer font-semibold bg-red-200 text-red-600'>Reset</button>
        </div>
    </div>
  )
}

export default Counter