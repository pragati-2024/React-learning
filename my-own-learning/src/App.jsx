import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Login from './component/Login'


function App() {
  const Router = createBrowserRouter([
    {path:'/',
    element:<><Navbar/><Home/></>
    },
    {
      path:'/Login',
      element:<><Navbar/><Login/></>
    },
    
  ])

  return (
    <>

    <RouterProvider router={Router}/>
    </>
  )
}

export default App
