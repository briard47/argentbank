import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Formfield from '../../components/Formfield/Formfield'
import Button from '../../components/Button/Button'
import UserLogo from '../../assets/circle-user-solid.svg'
import './LoginPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../slice/AuthSlice' 
import { useNavigate } from 'react-router-dom'

export default function Login(){
const[email, setEmail]= useState('');
const[password, setPassword]= useState('');


const {loading, error} = useSelector((state)=>state.user)
const dispatch=useDispatch()
const navigate=useNavigate()

const handleLogin=(e)=>{
    e.preventDefault()
    let userLogin={
        email, password
    }
    dispatch(auth(userLogin)).then((result)=>{
        if (result.payload){
            setEmail('');
            setPassword('');
            navigate('/')
        }
    })
   
}
    return(
        <div>
            <Header/>
                <section className='bg-dark login-page'>
                    <div className="sign-in-content">
                    <img className='login-logo'src={UserLogo} alt='Logo User'/>
                    <h2>Sign In</h2>  
                    <form onSubmit={handleLogin}>
                  <Formfield type="email" label="Email" id="email" placeholder="Your Email" 
                  value={email} onChange={(e)=>setEmail(e.target.value)} />
                  <Formfield type="password" label="Password" id="password" placeholder="Your password"
                   value={password} onChange={(e)=>setPassword(e.target.value)} />
                  <div className="input-remember">
                   <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                </div>
                <Button type="submit" >
                  {loading?'loading': 'Sign in'}  
                </Button>
                {error&&(<div role='alert'> erreur</div>)}
                  </form> 
                    </div>
                </section>
            <Footer />
        </div>
    )
}
