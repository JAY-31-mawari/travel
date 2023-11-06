import React,{useState} from 'react'
import './navbar.css'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

const Navbar = () => {
    const [active,setactive]=useState('navBar');
    const shownav=()=>{
        setactive('navBar activenavBar');
    }
    const removenav=()=>{
        setactive('navBar');
    }
  return (
    <section className='navBarsection'>
        <header className='header flex'>
            <div className="logoDiv">
                <a href="#" className='logo flex'>
                    <h1><MdOutlineTravelExplore className='icon'/>Travel</h1>
                </a>

            </div>
            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem">
                        <a href="/" className="navLink">Home</a>
                    </li>
                    <li className="navItem">
                        <a href="/about" className="navLink">About</a>
                    </li>
                    <li className="navItem">
                        <a href="/history" className="navLink">History</a>
                    </li>
                    <li className="navItem">
                        <a href="/contact" className="navLink">Contact</a>
                    </li>
                    <button className="btn" type="button">
                        <a href="/login">Login</a>
                    </button>
                    <div onClick={removenav} className="closeNavbar">
                        <AiFillCloseCircle className='icon'/>
                    </div>
                </ul>
            </div>
            <div onClick={shownav} className='toogleNavbar'>
                <TbGridDots className='icon'/>
            </div>
        </header>
    </section>
  )
}

export default Navbar
