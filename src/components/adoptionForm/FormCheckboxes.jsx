import React from 'react'
import './FormCheckboxes.css'

const FormCheckboxes = (props) => {
  return (
    <div>
        <div className="formCheckboxes">
            {props.label}
            <input className="checkbox" type="checkbox" />
        </div>
    </div>
  )
}

export default FormCheckboxes;