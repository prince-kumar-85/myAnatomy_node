import React from 'react'
import './App.css'
import { useState } from 'react'
//import the bootStrap

function App() {
  const[task, setSTask]=useState('');
  const[todos,setTodo]=useState([])
  const[editIndex,setEditIndex]=useState(null)

  const handleClick=()=>{
    if(task.trim()===""){
      alert("no blanks allowed")
      return
    }
    if(editIndex !== null){
      const updated = [...todos]
      updated[editIndex]=task
      setTodo(updated)
      setEditIndex(null)
    }else{
      setTodo([...todos,task])
    }
    setSTask('')
  }


  //editing the function...............................



  const theDelet=(index)=>{
 const newTodos=   todos.filter((_,i)=> i !== index)
 setTodo(newTodos)
  }
  return (
    <div>
      <h1>To do List</h1>
      <input type='text'value={task}
      onChange={e=> setSTask(e.target.value)}
      
       placeholder='enter task...'/>
      <button onClick={handleClick}> { editIndex !== null ? 'Update':'ADD'} </button>

      <ol>
        {todos.map((work,index)=>(
          <li key={index}>{work}
          <button onClick={()=>{setSTask(todos[index])
            setEditIndex(index)
          }}>Edit</button>
          <button onClick={()=>theDelet(index)}>delet</button>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default App
