import React, { useState } from 'react'

import Formfield from '../../components/Formfield/Formfield'
import Button from '../../components/Button/Button'
import AccountBox from '../../components/AccountBox/AccountBox'
import './UserProfile.css'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, setUserName } from '../../slice/UserSlice'


export default function UserProfile(){
    const dispatch=useDispatch()
    const user=useSelector((state=>state.user.profile))
    const username=user?.userName;
    const firstname=user?.firstName;
    const lastname=user?.lastName;

const [isEditing, setIsEditing]= useState(false)
const toggleEdit=event=>{
    event.preventDefault();
    setIsEditing(!isEditing);
}

const [newName, setNewName]=useState('')
const changeUsername=(e)=>{
    e.preventDefault()
    dispatch(setUserName(newName)).then((result)=>{
        if (result.payload){
            setIsEditing(!isEditing)
            dispatch(setUser())
        }
    })
}
    return(<div>
        
        <section className="bg-dark user-profile">
            <div className={isEditing ? "wht-text header hidden" :"wht-text header"}>
                <p>Welcome Back</p>
                <p>{username}</p>
                <Button type="button" onClick={toggleEdit}>
                    Edit Name
                </Button>
            </div>
            <div className={isEditing ? "username-edit " :"username-edit hidden"}>
                <h2 >Edit user Info</h2>
                <form className="form">                   
                    <Formfield type="text" label="User Name :" id="username" placeholder={username} required={true}
                    value={newName} onChange={(e)=>setNewName(e.target.value)}/>
                    <Formfield type="text" label="First Name :" id="firstname" placeholder={firstname} disabled={true} />
                    <Formfield type="text" label="Last Name :" id="lastname" placeholder={lastname}disabled={true}/>
                </form>
                <div className='edit-buttons'>
                <Button type="submit" onClick={changeUsername}>
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
    </div> )
}
