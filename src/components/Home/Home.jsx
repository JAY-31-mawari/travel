import React,{useState,useEffect} from 'react'

import './home.css'
import video from '../../assets/ocean_video.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'

  
const Home = () => {
  
  function senddatatoserver(){
    const destinationname=document.getElementById("destname")
    const newdata={
      destname:destinationname.value
    }
    fetch("https://travelapi-qhzt.onrender.com/api/products/demo",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newdata),
    })
    .then(response=>response.json())
    .then(data=>{
      console.log(data);
    })
    document.getElementById("destname").value="";
    document.getElementById("destdate").value="";
  }

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className="home">
      <div className="overlay">

      </div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">
          <h1 className="smallText">
            Our Packages
          </h1>
          <h1 className="homeTitle">
            Search Your Holiday
          </h1>
        </div>
        <div  className="cardDiv grid">
            <div className="destinationInput">
              <label htmlFor="city">Search Your Destination:
              </label>
              <div className="input flex">
                  <input type="text" id="destname" placeholder="Enter Name here...." />
                  <GrLocation className="icon"/>
              </div>
            </div>

            <div className="dateInput">
              <label htmlFor="date">Search Your Date:
              </label>
              <div className="input flex">
                  <input  id="destdate" type="date"/>
                  <GrLocation className="icon"/>
              </div>
            </div>

            <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="price">Max Price:
                </label>
                <h3 className="total">$5000</h3>
              </div>
              <div className="input flex">
                <input type="range" max="5000"  min="1000"/>
              </div>
            </div>

            <div className="searchOptions flex">
                <HiFilter className='icon'/>
                <span onClick={senddatatoserver}>SEND</span>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Home
