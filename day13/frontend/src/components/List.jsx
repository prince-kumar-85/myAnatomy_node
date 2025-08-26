import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function List() {
    const[books, setBooks] =  useState([])
    const Api_URL='http://localhost:5001/books'

    useEffect(()=>{
        axios.get(Api_URL)
        .then(res=>setBooks(res.data))
    },[])

    const handleDelete=  async(id)=>{
       await axios.delete(`${Api_URL}/${id}`)
       setBooks(books.filter((b)=>b._id!==id ))
    }


  return (
    <table className='table table-dark'>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Year</th>
                 <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {books.map((book)=>(
                <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.year}</td>

                <td><button className='btn btn-warning btn-sm'>Edit</button>
                <button onClick={()=>{
                    handleDelete(book._id)
                }} className='btn btn-danger btn-sm'>Delete</button>
                </td>
                </tr>
            ))}
        </tbody>
      
    </table>
  )
}

export default List
