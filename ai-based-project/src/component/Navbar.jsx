import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full fixed top-0 left-0 z-50'>
      <div className="w-full py-4 px-8 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-between shadow-md rounded-b-lg">

       
        <h1 className="text-white text-2xl font-bold">Mockneto</h1>

        
        <div className="flex items-center space-x-6">
          <Link to='/Home' className="text-white hover:text-purple-300 transition">Home</Link>
          <Link to='/PractiseInterview' className="text-white hover:text-purple-300 transition">PractiseInterview</Link>
          <Link to='/InterviewTips' className="text-white hover:text-purple-300 transition">InterviewTips</Link>
          <Link to='/ContactUs' className="text-white hover:text-purple-300 transition">ContactUs</Link>
          <Link to='/AboutUs' className="text-white hover:text-purple-300 transition">AboutUs</Link>
          <Link to='/Login'>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-1 rounded-md shadow-sm transition">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
