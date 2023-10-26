import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import BankLogo from'../../assets/argentBankLogo.png'
import UserLogo from '../../assets/circle-user-solid.svg'

export default function Header(){
    return(
    <div className='main-nav'> 
        <Link to='/'>
            <div className="main-nav-logo" >
                <img
                  className="main-nav-logo-image"
                 src={BankLogo}
                 alt="Argent Bank Logo"
               />
               <h1 className="sr-only">Argent Bank</h1>
            </div>
        </Link>
        <Link to= '/login'>
            <div className="main-nav-item" >
                < img src ={UserLogo} alt='icone de profil'/>
                <p>Sign In</p>
            </div>
        </Link>
    </div>
    )
}