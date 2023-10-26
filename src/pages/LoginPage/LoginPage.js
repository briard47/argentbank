import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Formfield from '../../components/Formfield/Formfield'
import Button from '../../components/Button/Button'
import UserLogo from '../../assets/circle-user-solid.svg'
import './LoginPage.css'

const handleClick=event=>{
    event.preventDefault()
    console.log("plop1")
}

export default function Login(){
    return(
        <div>
            <Header/>
                <section className='bg-dark login-page'>
                    <div className="sign-in-content">
                    <img className='login-logo'src={UserLogo} alt='Logo User'/>
                    <h2>Sign In</h2>  
                    <form>
                  <Formfield type="text" label="Username" id="username" placeholder="Your name"/>
                  <Formfield type="password" label="Password" id="password" placeholder="Your password"/>
                  <div className="input-remember">
                   <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                </div>
                <Button type="button" onClick={handleClick}>
                    Sign in
                </Button>
                  </form> 
                    </div>
                </section>
            <Footer />
        </div>
    )
}
