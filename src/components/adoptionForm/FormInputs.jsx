import React from 'react'
import './FormInput.css'

const FormInputs = (props) => {
  return (
    <>
        <div className='formInputs'>
            <input name={ props.name } placeholder={ props.placeholder } className="textInput" />
        </div>
    </>
  )
}

export  default FormInputs;