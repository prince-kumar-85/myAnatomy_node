import React from 'react'
import {useState} from 'react'

function About() {
  const [count, setCount]=useState(12)

  function add(){
    setCount(count+1)
  }
  const less=()=>{
    if(count>0){
    setCount(count-1)
    }else{
      setCount(0);
    }
  }
  const reset=()=>{
    setCount(0);
  }

  
  return (
    <>
      <h2>This is my About page</h2>
      <h3>The counter value is : {count}</h3>
      <button onClick={add}>+</button> &nbsp; &nbsp; &nbsp;
      <button onClick={less}>-</button> &nbsp; &nbsp; &nbsp;
       <button onClick={reset}>Reset</button> &nbsp; &nbsp; &nbsp;
    </>
  )
}

export default About
