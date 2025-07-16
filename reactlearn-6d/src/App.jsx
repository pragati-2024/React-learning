import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const[formData, setFormData] = useState({
    name:"",
    email:"",
    message:"",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //page reload n ho submit k baad
    console.log("submitted data",formData);
    alert("Form submitted successfully!");
  };
  
  return (
    <div className='min-h-screen flex item-center justify-center bg-gray-100 p-6'>
        <form
        onSubmit={handleSubmit}
        className='bg-white shadow-lg p-8 rounded-xl w-full max-w-md space-y-4'>
          <h2 className='text-2xl font-bold text-center text-blue-700'>Contact Form</h2>
           <input
            type="text"
            name="name"
            placeholder='enter your name'
            value={formData.name}

            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            required
            />
            <input
            name="message"
            placeholder='write your message'
            value={FormData.message}
            onChange={handleChange}
            rows="4"
            className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            required
            />
            <input
            type="email"
            name="email"
            placeholder='enter your email'
            value={FormData.email}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            required
            />

            <button type='submit' className='w-full px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600'>
              Submit
            </button>
        </form>
    </div>
  )
}

export default App
