import React, { useReducer, useState } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'reset':
            return {count: 0};
        default:
            return state;
    }
}

function Counter() {

    console.log(useState)
    console.log("********************")
    console.log(useReducer)

    const [state,dispatch] = useReducer(reducer, {count:0})

  return (
    <div>
      <h1>Reducer count:{state.count}</h1>
      <button onClick={()=>dispatch({type:'increment'})}> + </button>
      <button onClick={()=>dispatch({type:'decrement'})}> - </button>
      <button onClick={()=>dispatch({type: 'reset'})}> reset </button>
    </div>
  )
}

export default Counter
