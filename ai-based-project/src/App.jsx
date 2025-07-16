import React from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Login from './component/Login';
import ContactUs from './component/ContactUs';
import InterviewTips from './component/InterviewTips';
import PractiseInterview from './component/PractiseInterview';
import AboutUs from './component/AboutUs';




function App() {
  const Router = createBrowserRouter([
     {
      path: '/',  // ✅ Home route (default)
      element: <><Navbar /><Home /></>
    },
    {
      path: '/Home',
      element: <><Navbar /><Home /></>
    },
    {
      path:'/Login',
      element:<><Navbar/><Login/></>
      
    },
    {
      path:'/ContactUs',
      element:<><Navbar/><ContactUs/></>
    },
    {
      path:'/InterviewTips',
      element:<><Navbar/><InterviewTips/></>
    },
    {
      path:'/PractiseInterview',
      element:<><Navbar/><PractiseInterview/></>
      
    },
    {
      path:'/AboutUs',
      element:<><Navbar/><AboutUs/></>
    },
  ])
  return (
    
        <div>
          
          <RouterProvider router={Router}/>

        </div>
    
  )
}

export default App;
