import React, { useState } from 'react'
import Parent from './Parent'



export default function Data() {

    const [user,setUser]=useState('Niet mern Course')
  return (
    <h1>
      {`Hello ${user}`}
      <Parent abcd={user}/>
    </h1>
  )
}
