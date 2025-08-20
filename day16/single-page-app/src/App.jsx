import React from 'react'
import './App.css'
import Contact from './Contact'
import FeedBack from './FeedBack'
import About from './About'
import { Link, Route, Routes } from 'react-router-dom'
import Notfonud from './Notfonud'
import Home from './Home'

function App() {
  return (
    <>
      <div className='main'>
      <div className='navbar'>
        <Link to="/"></Link>
      <Link to='contact'>contact us</Link>
      <Link to="about">About us</Link>
      <Link to="feedBack">FeedBack</Link>
      </div>
      </div>


      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path='/feedBack' element={<FeedBack/>}></Route>
        <Route path='*' element={<Notfonud/>}></Route>
      </Routes>
     

    </>
  )
}

export default App
