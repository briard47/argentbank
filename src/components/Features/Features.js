import React from 'react'
import FeatureItem from "./FeatureItem/FeatureItem"
import ChatIcon from "../../assets/icon-chat.png"
import MoneyIcon from "../../assets/icon-money.png"
import SecurityIcon from "../../assets/icon-security.png"
import "./Features.css"


export default function Features(){
    return(
        <div className="features">
            <FeatureItem
            img={ChatIcon}
            alt= "Chat Icon"
            title= "You are our #1 priority"
            text= " Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            />
            <FeatureItem
             img={MoneyIcon}
             alt= "Money Icon"
             title= "More savings means higher rates"
             text= "The more you save with us, the higher your interest rate will be!"
             />
            <FeatureItem
             img={SecurityIcon}
             alt= "Security Icon"
             title= "Security you can trust"
             text= "We use top of the line encryption to make sure your data and money is always safe."
            />
        </div>
    )
}