import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Formfield from '../../components/Formfield/Formfield'
import Button from '../../components/Button/Button'
import AccountBox from '../../components/AccountBox/AccountBox'
import './UserProfile.css'


export default function UserProfile(){
const [isEditing, setIsEditing]= useState(false)

const toggleEdit=event=>{
    event.preventDefault();
    setIsEditing(!isEditing);
    console.log("plop1")
}

    return(<div>
        <Header/>
        <section className="bg-dark user-profile">
            <div className={isEditing ? "wht-text header hidden" :"wht-text header"}>
                <p>Welcome Back</p>
                <p>Insert name here</p>
                <Button type="button" onClick={toggleEdit}>
                    Edit Name
                </Button>
            </div>
            <div className={isEditing ? "username-edit " :"username-edit hidden"}>
                <h2 >Edit user Info</h2>
                <form className="form">                   
                    <Formfield type="text" label="User Name :" id="username" placeholder="Your name"/>
                    <Formfield type="text" label="First Name :" id="firstname" placeholder="firstnameprop" disabled={true} />
                    <Formfield type="text" label="Last Name :" id="lastname" placeholder="lastnameprop"disabled={true}/>
                </form>
                <div className='edit-buttons'>
                <Button type="button" onClick={toggleEdit}>
                    Save
                </Button>
                <Button type="button" onClick={toggleEdit}>
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
