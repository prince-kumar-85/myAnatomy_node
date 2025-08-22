import React from 'react'
import { useState } from 'react'

function Myform() {
    const[user, setUser]= useState(
        {
        username:"",
        useremail:""}
    );

    const handleSubmit=(e)=>{
        e.preventDefault();
        setData('')
    }

  return (
    <>
    <div className='main'>
        <div className='title'>Demo of form handling</div>
        <form onSubmit={handleSubmit}>
        Name:<input
        type='text' placeholder='enetr name' required/> <br /> <br />
        Email:<input
        type='email' placeholder='enetr name' required/> <br /> <br />
        <button type='submit'>Submit</button>
        </form>
    </div>
    </>
  )
}

export default Myform
