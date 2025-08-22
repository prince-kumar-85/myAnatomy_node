import React from 'react'
import { useState } from 'react'

function Contact() {
  const [data , setData]=useState('')
  const [names,setNames]=useState([])

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(`You Enter ${data}`)

    //Add to List
    setNames([...names,data])  //connecting array with individual name

    setData('')
  }
  return (
    <>
    <h1>This is contact page</h1>
      <form onSubmit={handleSubmit}>

     <label >Name: 
      <input type='text' placeholder='Enter your Name'
      value={data}
      onChange={e=>setData(e.target.value)}
       required/>
     </label>

     <button type='submit'> Submit </button>
     </form>

     <h3>The Name Entered are</h3>
     <ul>
      {names.map((hii,i)=>(
        <li key={i}>{hii}</li>
      ))}
     </ul>
    </>
  )
}

export default Contact
