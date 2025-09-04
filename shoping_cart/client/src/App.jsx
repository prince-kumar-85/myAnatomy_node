import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [items, setItems] = useState([])
  const [formData,setFormData]=useState({
    name:"",
    price:"",
    description:""
  })
  
  const API = 'http://localhost:3003/items'

  useEffect(() => {
    axios.get(API)
      .then(res => {
        
        setItems(res.data) 
      })
      
  }, [])
  const handleSubmit=async(e)=>{
    e.preventDefault();
    await axios.post(API,formData)
    .then(res=>{
      
      setItems([...items,res.data])
      setFormData({
        name:"",
        price:"",
        description:""

      })
    })
    .catch(err=>console.log(err))
  }

  return (
    <div>
      <h1>🛒 This is my Shopping cart</h1>

      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='enter name of items' required value={formData.name} onChange={(e)=>setFormData({ ...formData, name: e.target.value })}/>
        <input type="number" placeholder='enter price of items'required value={formData.price} onChange={(e)=>setFormData({ ...formData, price: e.target.value })}/>
        <input type="text" placeholder='enter description of items' required value={formData.description} onChange={(e)=>setFormData({ ...formData, description: e.target.value })}/>
        <button type="submit">Add Item</button>
      </form>


      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item.name} — {item.description} — ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
