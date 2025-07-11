import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const increase = ()=>setCounter(counter + 1);
  const decrease = ()=>setCounter(counter - 1);
  const reset = ()=>setCounter(0);

  return (
    <div>
      <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-500 p-6'>
          <div className='bg-white shadow-lg rounded-xl p-8 text-center w-82'>
          <h1 className='text-3xl font-bold text-blue-700 mb-4'>Counter App</h1>
          <p className='text-4xl font-mono mb-6'>{counter}</p>
          <div className='flex justify-between'>
            <button onClick={decrease} className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-'>
              Decrease
            </button>
            <button onClick={reset} className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-'>
              Reset
            </button>
            <button onClick={increase} className='bg-green-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-'>
              Increase
            </button>
          </div>
          </div>
      </div>
    </div>
  )

}
export default App;
