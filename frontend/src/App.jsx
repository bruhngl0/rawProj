import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Contact from './components/Contact';
import About from './components/About'


function App() {
  

  return (
  <Router>
    <Routes>
      <Route  path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />}  />
     
    </Routes>
  </Router>
  )
}

export default App
