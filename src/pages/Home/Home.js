import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Features from '../../components/Features/Features'
import Banner from '../../components/Banner/Banner'

export default function Home(){
    return(<div>
        <Header/>
        <Banner />
       <Features/>
        <Footer />
    </div> )
}