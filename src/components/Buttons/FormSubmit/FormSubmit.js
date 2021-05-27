import React from 'react'
import './formSubmit.css'

const FormSubmit = ({ name, type}) => {
    return (
        <div className="submit__wrap">
        <button style={{textAlign: "right"}} className='formSubmit' type={type}>
        {name}
      </button>
      </div>
    )
}

export default FormSubmit
