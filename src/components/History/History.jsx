import React,{useState,useContext,useEffect} from 'react'
import TravelContext from '../../state/TravelContext';
import '../About/about.css'
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

const imgarr=[kedarnath,badrinath,almora,kerala,kumaon,nainital,rishikesh,uk,himalaya,dharamsala,ny,paris,norway,santorini,singapore,dubai,maldives]

const History = () => {
  const {data}=useContext(TravelContext);
  const [username,setusername]=useState(data.name);
  const [historydata,sethistorydata]=useState([]);
  const newdata={
    username:username,
  }
  useEffect(()=>{
    fetch('http://localhost:4000/api/products/historydata',{
      method:'POST',
      headers:{
        'Content-type':'application/json',
      },
      body:JSON.stringify(newdata)
    })
    .then((response)=>{
      return response.json();
    }).then((data)=>{
      sethistorydata(data);
    })
  },[])

  return (
    <section className='historysection'>
      <div className='historycontent container'>
        {historydata.length === 0 ? <div><h1>No Order History</h1></div>:
      <div>
        <h1>Order History</h1>
        <div className="historybox">
            {historydata.map(({id,destname,location,price,desttype,desc})=>{
                return(
                  <div className="historycontainer">
                      <div className="historycontainer1">
                        <img src={imgarr[id-1]} alt={destname} />
                      </div>
                      <div className='historycontainer3'>
                      <h4>{destname}</h4>
                      <span>{location}</span>
                      <h5>{price}</h5>
                    </div>
                    <div className='historycontainer2'>
                      <p>{desc}</p>
                    </div>
                    
                  </div>
                )
            })}
        </div>
      </div>}
      </div>
    </section>
  )
}

export default History
