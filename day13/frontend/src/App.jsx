import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
import Create from './components/Create'
import Update from './components/Update'
import List from './components/List'


function App() {
  return (
    <Router>
    <div className='container mt-4'>
     <h1 className='text-center mb-4'>Book-Manager</h1>
     <nav className='mb-4 '>
      <Link to="/" className='btn btn-primary me-2'>Books List</Link>
      <Link to="/create" className='btn btn-success me-2'>Add Book</Link>
      
     </nav>

     <Routes>
       <Route path="/" element={<List/>}/>
      <Route path='create' element={<Create/>}/>
      <Route path='/update/:id' element={<Update/>}/>
     </Routes>
    </div>
    </Router>
  )
}

export default App
