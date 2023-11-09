import React,{useState,useEffect,useContext} from 'react'
import './main.css'
import  { Link } from 'react-router-dom'
import kedarnath from '../../assets/kedarnath.jpg'
import almora from '../../assets/uttharkhand1.jpg'
import kerala from '../../assets/kerala.jpg'
import paris from '../../assets/paris.jpg'
import maldives from '../../assets/Maldives.jpg'
import dubai from '../../assets/dubai.jpg'
import norway from '../../assets/Norwat.jpg'
import santorini from '../../assets/santorini1.jpg'
import singapore from '../../assets/singapore.jpg'
import badrinath from '../../assets/badrinath.jpg'
import dharamsala from '../../assets/dharamsala.jpg'
import himalaya from '../../assets/himalaya.jpg'
import kumaon from '../../assets/kumaon.jpg'
import nainital from '../../assets/nainital.jpg'
import ny from '../../assets/ny.jpg'
import rishikesh from '../../assets/rishikesh.jpg'
import uk from '../../assets/uk.jpg'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import TravelContext from '../../state/TravelContext'

const imgarr=[kedarnath,badrinath,almora,kerala,kumaon,nainital,rishikesh,uk,himalaya,dharamsala,ny,paris,norway,santorini,singapore,dubai,maldives]
const Main = () => {

  const [Data,setData]=useState([]);
  const {data,updatedata}=useContext(TravelContext);

  useEffect(()=>{
    fetch("https://travelapi-qhzt.onrender.com/api/products/travelsdatabase",)
    .then((response)=>{
      return response.json();
    }).then((data)=>{
      console.log(data)
      setData(data);
    })
  },[])

  const handlebooknow = (data) => {
    updatedata({
      id:data.id,
      destname:data.destname,
      location:data.location,
      price:data.price,
      desttype:data.desttype,
      desc:data.description,
    })
  }
  
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">
          Most Visited Destinations
        </h3>
      </div>
      <div className="secContent grid">
        {Data.map(({id,destname,location,desttype,price,description})=>{
            return (
                <div key={id} className="singleDestination">
                    <div className="imageDiv">
                      <img src={imgarr[id-1]} alt={destname}
                      />
                    </div>
                    <div className="cardInfo">
                      <h3 className="destTitle">{destname}</h3>
    
                      <span className="continent flex">
                        <HiOutlineLocationMarker className='icon'/>
                        <span className='name'><h4>{location}</h4></span>
                      </span>
                      <div className="fees flex">
                        <div className="grade">
                          <span>{desttype}</span>
                        </div>
                        <div className="price">
                          <h5>{price}</h5>
                        </div>
                      </div>
            
                      <div className="desc">
                        <p>{description}</p>
                      </div>
                      <button className='btn flex' onClick={()=>handlebooknow({id,destname,location,desttype,price,description})}><Link to="/payment">
                        BOOK NOW </Link><HiOutlineClipboardCheck className='icon'/>
                      </button>
                    </div>
                </div>
            )
        })}
      </div>
    </section>
  )
}

export default Main
