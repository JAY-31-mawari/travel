import React from 'react'
import './footer.css'
import {FiChevronRight, FiSend} from 'react-icons/fi'
import video2 from '../../assets/video (2).mp4'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'


const Footer = () => {

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address'/>
            <button className='btn flex' type='submit'>
              SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className='icon'/>.Travel
              </a>
            </div>
            <div className="footerParagraph">
            Explore the world with Travel. Your gateway to unforgettable journeys and remarkable destinations. Whether you're a seasoned traveler or planning your first adventure, we're here to make your travel dreams come true. Discover the best travel deals, get expert travel tips, and stay connected with us. Let's embark on a journey of a lifetime together
            </div>
            <div className="footerSocials">
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillInstagram className='icon'/>
              <FaTripadvisor className='icon'/>
            </div>
          </div>
          <div className="footerLinks grid">
            {/*Group ONE*/}
            <div className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Insurances
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Payment
              </li>
            </div>
            {/*Group TWO*/}
            <div className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                TripAdvisor
              </li>
            </div>
            {/*Group THREE*/}
            <div className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                India
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Oceania
              </li>
            </div>
            
          </div>
          <div className="footerDiv flex">
            <small>BEST TRAVE WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED</small>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Footer
