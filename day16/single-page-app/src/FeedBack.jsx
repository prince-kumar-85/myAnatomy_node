import React from 'react'
import { useState } from 'react'

function FeedBack() {
  const [names,setNames]=useState('')
  const [email, setEmail]=useState('')
  const [list, setList]=useState([])
  const [liste, setListe]=useState([])

  const mynames=(e)=>{
    e.preventDefault()
    setList([...list,names])
    setListe([...list,email])
    console.log(`the name entered is ${names}`)
    setNames('')
  }


  return (
    <>
      <h2>This is my feedBack page</h2>
      <form onSubmit={mynames}>
        <label>Name:
          <input type="text" placeholder='Enter your name' 
          value={names}
          onChange={(e)=>setNames(e.target.value)}/>
        </label>
        <label>Email:
          <input type="Email" placeholder='Enter your Email' 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        <button type='submit'>Submit</button>
      </form>

      <h3>List who gave feedBack</h3>
      <ul>
        {list.map((jii,i)=>(
          <li key={i}>{jii}</li>
        ))}
      </ul>
       <ul>
        {liste.map((jii, i)=>(
          <li key={i}>{jii}</li>
        ))}
      </ul>


    </>
  )
}

export default FeedBack
