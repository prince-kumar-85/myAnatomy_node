import "./App.css"
import "./Adult"
import "./Kids"
import Kids from "./Kids";
import Adult from "./Adult";
import Greet from "./Greet";



function App(){
  const favColor="pink"
  const age = 5;
  return (
    <>
   
  <h1>I Like React</h1>
  <h2>I like to drive car</h2>
  <h3>{5+4}</h3>
  <p>My fevrpte color is :{favColor}</p>

  {age < 18 ? <Kids/>: <Adult/>}
   <Greet name="prince"/>
  </>
  )

}
export default App