import React from 'react'
import Contact from './component/Contact'
import {Routes,Route,Link, Links} from 'react-router-dom'
import About from './component/About'


function App() {
  return (
    <div>
        this is main App file 


        

    <button><Link to={'/about'}>about</Link></button>
        <Routes>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
        <button><Link to={'/contact'}>Contact</Link></button>
      
    </div>

  )
}

export default App
