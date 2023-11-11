import React,{useContext} from 'react'
import '../Main/main.css'
import './payment.css'
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
import TravelContext from '../../state/TravelContext'

const imgarr=[kedarnath,badrinath,almora,kerala,kumaon,nainital,rishikesh,uk,himalaya,dharamsala,ny,paris,norway,santorini,singapore,dubai,maldives]
const Payment = () => {

    const {data}=useContext(TravelContext);

    const handlepayment = () => {
        if(data.name==="GUEST")
        {
            alert("PLEASE ! FIRST LOGGED IN")
        }
        else{
            fetch("https://travelapi-qhzt.onrender.com/api/products/payment",{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(data),
            }).then((response)=>{
                return response.json();
            }).then((data)=>{
                alert(data.message);
            })
        }
    }
  return (
    <div className="paymentsection">
        <div className="paymentcontent container">
            <div class="paymentcontainer">
            <div class="payment-container">
                <div class="payment-title">Payment Details</div>
                <div class="form-row">
                    <label for="card-number">Card Number</label>
                    <input type="text" id="card-number" placeholder="Card Number" />
                </div>
                <div class="form-row">
                    <label for="expiry-date">Expiry Date</label>
                    <input type="text" id="expiry-date" placeholder="MM/YY" />
                </div>
                <div class="form-row">
                    <label for="cvv">CVV</label>
                    <input type="text" id="cvv" placeholder="CVV" />
                </div>
                <div class="form-row">
                    <label for="passcode">Passcode</label>
                    <input type="password" id="passcode" placeholder="Passcode" />
                </div>
                <button class="payment-button" onClick={handlepayment}>Make Payment</button>
            </div>

            <div class="extra-container">
                <div className="singleDestination">
                    <div className="imageDiv">
                        <img src={imgarr[data.id-1]} alt={data.destname}/>
                    </div>
                    <div className="cardInfo">
                        <h3 className="destTitle">{data.destname}</h3>

                        <span className="continent flex">
                        <HiOutlineLocationMarker className='icon'/>
                        <span className='name'><h4>{data.location}</h4></span>
                    </span>
                        <div className="fees flex">
                            <div className="grade">
                                <span>{data.desttype}</span>
                        </div>
                        <div className="price">
                            <h5>{data.price}</h5>
                        </div>
                    </div>
        
                    <div className="desc">
                        <p>{data.desc}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Payment
