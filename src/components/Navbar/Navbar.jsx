import React,{useState,useContext} from 'react'
import './navbar.css'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { Link } from 'react-router-dom'
import TravelContext from '../../state/TravelContext';

const Navbar = () => {
    const{data}=useContext(TravelContext);
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
                        <Link to="/" className="navLink">Home</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/about" className="navLink">About</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/history" className="navLink">History</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/contact" className="navLink">Contact</Link>
                    </li>
                    <button className="btn" type="button">
                        <Link to="/login">Login</Link>
                    </button>
                    <h4>{data.name.toUpperCase()}</h4>
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
