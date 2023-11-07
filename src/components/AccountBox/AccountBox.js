import React from 'react'
import PropTypes from "prop-types"
import Button from '../Button/Button'
import './AccountBox.css'

const AccountBox = ({  title,  amount,description }) => {
    return(
        <div className='account'>
        <div className="account-content-wrapper">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
            <Button className="transaction-button"> View transactions</Button>
        </div>
        </div>
    )
}
AccountBox.propTypes = {
    title: PropTypes.string,
    amount: PropTypes.string,
    description: PropTypes.string,
  };
  AccountBox.defaultProps = {
    title: "ArgentBank Checking(x3448)",
    amount: "$48,098.43",
    description: "Available balance"
  }
export default AccountBox