import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import BankLogo from'../../assets/argentBankLogo.png'
import UserLogo from '../../assets/circle-user-solid.svg'
import signOut from'../../assets/sign-out.svg'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../slice/AuthSlice'
import { logoutUser } from '../../slice/UserSlice'
import Button from '../Button/Button'



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
            <div className='main-nav-item'>
                < img src ={UserLogo} alt='profile icon'/>
                <span>{username}</span>                
            </div>
        </Link>
        <Link to= '/login'>
            <Button className="main-nav-item" onClick={loggingout}>< img src ={signOut} alt='log out icon'/> Sign out</Button>
        </Link>
        </div>):
        (<><Link to= '/login'>
            <div className="main-nav-item" >
                < img src ={UserLogo} alt='profile icon'/>
                <p>Sign In</p>
            </div>
        </Link></>)}
        
    </div>
    )
}