import React from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    alert('Hello from useEffect!')
  },[])
  useEffect(() => {
    document.title = 'learning!'
    return () => {
      document.title = 'cleanup!'
    }
  },[])

  return (
    <div className='min-h-scren  flex items-center justify-center bg-gray-100 p-6'>
      <h1 className='text-2xl font-bold text-center text-blue-700'>useEffect Example</h1>
    </div>
  )
}

export default App
