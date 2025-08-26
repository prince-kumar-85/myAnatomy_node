import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Data() {
  const [users, setUsers] = useState([])
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res =>{ setUsers(res.data)
        setLoading(false)
      })
      .catch(error =>{ console.error('The error is', error)
        setLoading(false)
      })
  }, [])

  return (
    <>
    <div>Data from Api</div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Sr. No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan='5' className='text-center'>
              <div className='d-flex justify-content-center'>
                <div className='spinner-border text-primary' role='status'>
                  <div className='visually-hidden'>Loading...</div>
                </div>
              </div>
              </td>
            </tr>
            
          ):(users.map(abc => (
            <tr key={abc.id}>
              <th scope="row">{abc.id}</th>
              <td>{abc.name}</td>
              <td>{abc.email}</td>
              <td>{abc.address.city}</td>
              <td>{abc.website}</td>
            </tr>
            
          
          ))
        )}
        </tbody>
      </table>
    </>
  )
}

export default Data
