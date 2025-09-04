import React , {useRef} from 'react'
import { use } from 'react'

function MyRef() {
    // console.log(useRef)
    const myInput=useRef()

    function handleclick(){
        myInput.current.style.background='yellow'
        myInput.current.style.color='red'
        myInput.current.style.width="500px"
        console.log("run rdsd")
    }

  return (
    <div>
     <h2>Use reaf Demo</h2>
     <input type="text" placeholder='ref demo...' ref={myInput}/>
     <button onClick={handleclick}>Submit</button>
    </div>
  )
}

export default MyRef
