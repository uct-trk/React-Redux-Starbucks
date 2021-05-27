import React from 'react'
import './formSubmit.css'

const FormSubmit = ({ name, type, margin}) => {
    return (
        <div className="submit__wrap">
        <button style={{textAlign: "right", marginLeft: margin}} className='formSubmit' type={type}>
        {name}
      </button>
      </div>
    )
}

export default FormSubmit
