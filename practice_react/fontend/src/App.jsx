import React from 'react'
import Contact from './component/Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div>
        this is main App file 
        


        <Routes>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
      
    </div>

  )
}

export default App
