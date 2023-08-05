import React from 'react'
import './FormRadios.css'

const FormRadios = () => {
  return (
    <>
        <div className="residenceRadios">
            <input type="radio" value="Home" name="residence" /> Home
            <input type="radio" value="Apartment" name="residence" /> Apartment
        </div>
    </>
  )
}

export default FormRadios;