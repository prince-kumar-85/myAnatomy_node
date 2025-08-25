import React from 'react'
import { useState } from 'react'

function Myform() {
    const[list,setList]=useState([])
    const[user, setUser]= useState(
        {
        username:"",
        useremail:""}
    );

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(`The name is ${user.username} ans his email is ${user.useremail}` )
        setUser({
            username:"",
            useremail:""
        })
        setList([...list,user])
        // setList([...list,`${user.username},${user.useremail}`])
    }

  return (
    <>
    <div className='main'>
        <div className='title'>Demo of form handling</div>
        <form onSubmit={handleSubmit}>
        Name:<input
        type='text' placeholder='enetr name' 
        required value={user.username} 
        onChange={e=>setUser({...user,username:e.target.value})}/> <br /> <br />

        Email:<input
        type='email' placeholder='enetr email'
         value={user.useremail} 
        onChange={e=>setUser({...user,useremail:e.target.value})} required/> <br /> <br />
        <button type='submit'className='btn btn-primary'>Submit</button>
        </form>
    </div>
    <h2>the Users details are</h2>
    {/* <ol>
        {list.map((u,index)=>(
<li key={index}>{u}</li>
        ))}
    </ol> */}


    <table className="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
  
    </tr>
  </thead>
  <tbody>
    {list.map((p,index)=>(
        <tr key={p.id}>
      <th scope="row">{index+1}</th>
      <td>{p.username}</td>
      <td>{p.useremail}</td>
      
    </tr>
    ))}
    
    
  </tbody>
</table>


    </>
  )
}

export default Myform
