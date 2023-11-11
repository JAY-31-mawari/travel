import React,{useState} from 'react'
import TravelContext from './TravelContext'

const TravelProvider = (props) => {

    const [data,setdata]=useState({name:"GUEST",id:0,destname:"",location:"",price:"",desttype:"",desc:""});

    const updatedata=(newdata)=>{
        setdata({...data,...newdata})
    }
    
    return (
        <TravelContext.Provider value={{data,updatedata}}>
            {props.children}
        </TravelContext.Provider>
    )
}

export default TravelProvider