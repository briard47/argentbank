import React from 'react'
import PropTypes from "prop-types"
import './Formfield.css'

const Formfield = ({label, type, placeholder, id })=>{
    return(
        <div className="input-wrapper">
        <label htmlFor={id}>{label}</label>
        <input type={type} 
        placeholder={placeholder}
        id={id} />
        </div>
    )
}

Formfield.propTypes={
    label:PropTypes.string,
    type:PropTypes.string,
    placeholder:PropTypes.string,
    id:PropTypes.string
}

Formfield.defaultProps={
    label:"",
    type:"text",
    placeholder:"",
    id:""
}

export default Formfield