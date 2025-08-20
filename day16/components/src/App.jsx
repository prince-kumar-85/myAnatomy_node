import React from 'react'
import './App.css'
import Cards from './components/Cards'
import kk from './assets/kk.jpg'
import pass from './assets/po.jpeg'
import nature from './assets/wp2665214.jpg'
import nature1 from './assets/react.svg'

function App() {
  return (
    <>
    <h1>Welcome to Components</h1>
    <Cards pic={pass} title="Baleno Car" desc="this car is in budget car"/>
    <Cards pic={nature} title="Nature" desc="we love nature"/>
    <Cards pic={kk} title="baby" desc="A baby is kind hearted"/>
    <Cards pic={nature1} title="react" desc="A react for forntend developer"/>
    
    </>
  )
}

export default App
