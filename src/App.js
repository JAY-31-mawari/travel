import React,{useState,useEffect} from 'react'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import './app.css'


const App = () =>{
    return (
        <>
        <Navbar />
        <Home />
        <Main />
        <Footer />
        </>
    )   
}
export default App