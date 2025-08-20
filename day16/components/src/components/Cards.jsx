import React from 'react'
import nature from '../assets/wp2665214.jpg'
import '../App.css'

import kk from '../assets/kk.jpg'

function Cards({pic,title,desc}) {
  return (
    <div className='card'>
     <img src={pic} alt="photo" />
     <h4 className='title'>{title}</h4>
     <p className='desc'>{desc}</p>
    </div>
  )
}

export default Cards
