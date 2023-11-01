import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import BankLogo from'../../assets/argentBankLogo.png'
import UserLogo from '../../assets/circle-user-solid.svg'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../slice/AuthSlice'
import { logoutUser } from '../../slice/UserSlice'



export default function Header(){
    const dispatch=useDispatch()
const user=useSelector((state=>state.user.profile))
const username=user?.userName
const loggingout=()=>{
    dispatch(logout());
    dispatch(logoutUser())
   
};
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

        {user?(<div className='main-nav-item'  >
            <Link to= '/profile'>
            <div>
                < img src ={UserLogo} alt='icone de profil'/>
                <span>{username}</span>
                
            </div>
        </Link>
        <Link to= '/login'>
            <div>
                <button onClick={loggingout}>Sign out</button>
            </div>
        </Link>
        </div>):(<><Link to= '/login'>
            <div className="main-nav-item" >
                < img src ={UserLogo} alt='icone de profil'/>
                <p>Sign In</p>
            </div>
        </Link></>)}
        
    </div>
    )
}