import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'


function Data() {


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>
            console.log(res.data[0].name)
        )
    })
  return (
    <>
    <div>
        <h1>kjoihffoerhfoer</h1>
      
    </div>
    </>
  )
}

export default Data
