import React from 'react'
import PropTypes from "prop-types"
import './Button.css'


  const Button = ({  onClick,  disabled,className, children }) => {
   
        return (
          <button          
            disabled={disabled}
            className={className}
            onClick={onClick}
          >
            {children}
          </button>
        );
        }
  Button.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className:PropTypes.string,
    children: PropTypes.node,
  };
  Button.defaultProps = {
    disabled: false,
    onClick: () => null,
    className: "button",
    children: null
  }
  
export default Button