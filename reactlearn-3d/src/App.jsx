import React from 'react';
import Parent from './parent';
import './App.css'

function App() {

  const user = {
    name:"Pragati",
    email:"bpragati21@gmail.com",
    role:"student",
  };


  return (
    <div className='min-h-screen bg-gray-100 flex flex items-center justify-center p-6'>
      {/* {comment} */}
      <Parent user_for_parent ={user}/>
      
    </div>

  )
}

export default App
