import React from 'react'
import PropTypes from "prop-types"
import './Formfield.css'

const Formfield = ({label, type, placeholder, id, value, onChange, disabled })=>{
    return(
        <div className="input-wrapper">
        <label htmlFor={id}>{label}</label>
        <input type={type} 
        placeholder={placeholder}
        id={id} 
        value={value}
        onChange={onChange}
        disabled={disabled}
        />
        </div>
    )
}

Formfield.propTypes={
    label:PropTypes.string,
    type:PropTypes.string,
    placeholder:PropTypes.string,
    id:PropTypes.string,
    value:PropTypes.string,
    onChange:PropTypes.func,
    disabled: PropTypes.bool,
}

Formfield.defaultProps={
    label:"",
    type:"text",
    placeholder:"",
    id:"",
    value:"",
    onChange:()=>{},
    disabled: false,
}

export default Formfield