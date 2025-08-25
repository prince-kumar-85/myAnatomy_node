import React from 'react'
import Myform from './components/Myform'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Boot from './components/Boot';

import Data from './components/Data';

function App() {
  return (
    <div>
      <Myform/>
      <Boot/>
      <Data/>
    </div>
  )
}

export default App
