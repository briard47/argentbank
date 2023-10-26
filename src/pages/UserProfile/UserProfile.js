import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Formfield from '../../components/Formfield/Formfield'
import Button from '../../components/Button/Button'
import AccountBox from '../../components/AccountBox/AccountBox'
import './UserProfile.css'


const handleClick=event=>{
    event.preventDefault()
    console.log("plop1")
}

export default function UserProfile(){
    return(<div>
        <Header/>
        <section className="bg-dark user-profile">
            <div className="wht-text header">
                <p>Welcome Back</p>
                <p>Insert name here</p>
                <Button type="button" onClick={handleClick}>
                    Edit Name
                </Button>
            </div>
            <div className="username-edit">
                <h2 >Edit user Info</h2>
                <form className="form">                   
                    <Formfield type="text" label="User Name :" id="username" placeholder="Your name"/>
                    <Formfield type="text" label="First Name :" id="firstname" placeholder="firstnameprop"/>
                    <Formfield type="text" label="Last Name :" id="lastname" placeholder="lastnameprop"/>
                </form>
                <div className='edit-buttons'>
                <Button type="button" onClick={handleClick}>
                    Save
                </Button>
                <Button type="button" onClick={handleClick}>
                   Cancel
                </Button>
                </div>
            </div>
            <div className='account-balance'>
                <AccountBox/>
                <AccountBox/>
                <AccountBox/>
            </div>
        </section>
        <Footer />
    </div> )
}
