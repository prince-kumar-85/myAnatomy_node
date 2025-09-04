import React from 'react'

function Practice() {
    const fruit=['apple', 'banana', 'orange'];
  return (
    <div>
      <h2>The fruit record</h2>
      <ul>
        <li>{fruit[0]}</li>
        <li>{fruit[1]}</li>
        <li>{fruit[2]}</li>
      </ul>
      <ol>
        {fruit.map((fruit,i)=>(
            <li key={i}>{i+1}{fruit}</li>
            ))}
      </ol>
    </div>
  )
}

export default Practice
