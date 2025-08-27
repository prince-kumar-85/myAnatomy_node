import React, { useState } from 'react'

function Contact() {
    const [input, setInput]= useState({
        firstName:"",
        lastName:"",
        DOB:"",
        file:null
    })
    const handleSubmit=()=>{
        
    }
  return (
    <>
     <h1>This is google form for registration</h1>
     <div>
        <form action="" className='' onClick={handleSubmit}>
            <label htmlFor=""> FirstName:
                <input type="text" value={input.firstName} onSubmit={(e)=>setInput(e.target.value)} />
            </label>
            <label htmlFor="">LastName:
                <input type="text" value={input.lastName} onSubmit={(e)=>setInput(e.target.value)} />
            </label>
            <label htmlFor="">D.O.B:
                <input type="date" value={input.DOB} onSubmit={(e)=>setInput(e.target.value)} />
            </label>
            <label htmlFor="">Resume:
                <input type="file" value={input.file} onSubmit={(e)=>setInput(e.target.value)} />
            </label>
        </form>
     </div>
    </>
  )
}

export default Contact
