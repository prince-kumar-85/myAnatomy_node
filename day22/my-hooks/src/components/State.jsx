import React from 'react'
import {useState,useEffect} from 'react'

function State() {
    const [count, setCount] = useState(0);
    const add = () => {
        setCount(count + 1);
    }
    const sub = () => {
        setCount(count - 1);
    }

    useEffect(() => {
        console.log("The count value is changed to ", count);
    },[count])

//useEffect have 3 verssions 
//1. [] only once loaded
//2. no array render will be count
//3. [depenency] will change

  return (
    <div>
      <h2>The Counter value is: {count}</h2>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
    </div>
  )
}

export default State
