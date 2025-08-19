import React from 'react'
import Safe from './Safe'
import Dange from './Dange'
import Person from './person'

function App() {
  const speed = 51;

  return (
    <div>
      {speed > 60 ? <Dange/> : <Safe/>}
      
      <Person name="Prince" age="20"/>
      <Person name="kumal" age="30"/>
      <Person name="rahul" age="60"/>
    </div>
  )
}

export default App;
