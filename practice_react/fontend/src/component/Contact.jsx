import React, { useState } from 'react'

function Contact() {
    const [list,setList] = useState([])
    const [input, setInput]= useState({
        firstName:"",
        lastName:"",
        DOB:"",
        file:null
    })
    const handleSubmit=(e)=>{
        e.preventDefault()
        setList((prev)=>[...prev,input])
                
    }
  return (
    <>
     <h1>This is google form for registration</h1>
     <div>
        <form action="" className='' onSubmit={handleSubmit}>
            <label htmlFor=""> FirstName:
                <input type="text" value={input.firstName} onChange={(e)=>setInput({...input,firstName:e.target.value})} />
            </label>
            <label htmlFor="">LastName:
                <input type="text" value={input.lastName} onChange={(e)=>setInput({...input,lastName:e.target.value})} />
            </label>
            <label htmlFor="">D.O.B:
                <input type="date" value={input.DOB} onChange={(e)=>setInput({...input,DOB:e.target.value})} />
            </label>
            <label htmlFor="">Resume:
                <input
  type="file"
  name="file"
  onChange={(e) => setInput({ ...input, file: e.target.files[0] })}
/>

            </label>
            <button style={{color:'blue'}} type='submit'>Submit</button>
        </form>
     </div>
     <div>
        <ol>
            {list.map((item,i)=>(
                <li key={i}>
              {item.firstName} - {item.lastName} - {item.DOB} -{" "}
              {item.file ? item.file.name : "No file"}
            </li>
            ))}
        </ol>
     </div>
    </>
  )
}

export default Contact
