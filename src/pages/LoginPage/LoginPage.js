import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Formfield from '../../components/Formfield/Formfield'
import Button from '../../components/Button/Button'
import UserLogo from '../../assets/circle-user-solid.svg'
import './LoginPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { authentlast, authentshort } from '../../slice/AuthSlice'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../../slice/UserSlice'


export default function Login(){
const {loading, error} = useSelector((state)=>state.auth);
const dispatch=useDispatch()
const navigate=useNavigate()


const[email, setEmail]= useState('');
const[password, setPassword]= useState('');
const [rememberMe, setRememberMe]=useState(false)
const handleChange=()=>{
    setRememberMe(!rememberMe)
}

const handleLogin=(e)=>{
    e.preventDefault()
    let userLogin={
        email, password
    }
// eslint-disable-next-line no-const-assign
if(rememberMe===true){
        dispatch(authentlast(userLogin)).then((result)=>{
            if (result.payload){
                setEmail('');
                setPassword('');
                dispatch(setUser());
                navigate('/profile')
            }
        })
   }
else dispatch(authentshort(userLogin)).then((result)=>{
    if (result.payload){
        setEmail('');
        setPassword('');
        dispatch(setUser());
        navigate('/profile')
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
                   <input type="checkbox" id="remember-me"value={rememberMe} onChange={handleChange} /><label htmlFor="remember-me">Remember me</label>
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
