import React from 'react'
import {Link} from 'react-router-dom'

function Notfonud() {
  return (
    <>
      <h2>404 Error, Page not found</h2>
      <Link to={'/'}>
      <button>Back to the hoome </button>
    </Link>
    </>
  )
}

export default Notfonud
