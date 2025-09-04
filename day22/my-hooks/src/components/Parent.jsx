import React from 'react'
import Child from './Child'

function Parent({abcd}) {
  return (
    <div>
      Parent
      <Child user={abcd}/>
    </div>
  )
}

export default Parent
