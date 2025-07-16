import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
   
  return (
    <div>
        <nav>
            <Link to="/"><li>Home</li></Link>
            <Link to="/About"><li>About</li></Link>
            <Link to="/"><li>contact</li></Link>
            <Link to="/Login"><li>Login</li></Link>
        </nav>
    </div>
  )
}

export default Navbar