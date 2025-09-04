import React from 'react'
import State from './components/State'
import Data from './components/Data'
import Parent from './components/Parent'
import Counter from './components/Counter'
import MyRef from './components/MyRef'
// import Child from './components/Child'
// import GrandChild from './components/GrandChild'

function App() {
  return (
    <div>
      <h1>Some Hooks in react</h1>
      <State/>
      <Data/>
      <Parent/>
      {/* <Child/>
      <GrandChild/> */}
      <Counter/>
      <MyRef/>
    </div>
  )
}

export default App
