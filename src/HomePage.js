import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import './app.css'


const HomePage = () =>{
    return (
        <>
        <Navbar />
        <Home />
        <Main />
        <Footer />
        </>
    )   
}
export default HomePage