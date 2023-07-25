import React from 'react'
import './adoptbutton.css'
import { Link } from 'react-router-dom'

export const AdoptButton = () => {
  return (
    <div>
            <Link to="/AdoptionForm" className='adoptionBtn'>Adopt me!</Link>
    </div>
  )
}
