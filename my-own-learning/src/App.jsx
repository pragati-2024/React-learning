import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './Home/page.jsx'
import About from './About/page.jsx'
import Contact from './Contact/page.jsx'
import Follow from './Follow/page.jsx'

function App() {
  return (
    <Router>
      <div>
        <h1>My Home page</h1>

        <nav>
          <Link to="/Home">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Follow">Follow</Link>
        </nav>

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Follow" element={<Follow />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
