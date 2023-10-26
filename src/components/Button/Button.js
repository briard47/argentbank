import React from 'react'
import PropTypes from "prop-types"
import './Button.css'


  const Button = ({  onClick,  disabled, children }) => {
   
        return (
          <button          
            disabled={disabled}
            className="button"
            onClick={onClick}
          >
            {children}
          </button>
        );
        }
  Button.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.node,
  };
  Button.defaultProps = {
    disabled: false,
    onClick: () => null,
    children: null
  }
  
export default Button