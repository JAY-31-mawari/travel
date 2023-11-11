import React,{useState,useContext} from 'react'
import '../About/about.css'
import TravelContext from '../../state/TravelContext'
import { Link } from 'react-router-dom' 

const Login = () => {
  
const [islogin,setislogin]=useState(true)
const {data,updatedata}=useContext(TravelContext);
const handlechange = () =>{
  setislogin(!islogin);
}

const handledata = () => {
  let loginname=document.getElementById("username").value.toUpperCase();
  const newdata={
    username:loginname,
    islogin:islogin,
  }
    fetch("https://travelapi-qhzt.onrender.com/api/products/login",{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(newdata),
    }).then((response)=>{
      return response.json();
    }).then((data)=>{
      if(data.message === "SUCCESSFULLY LOGGED IN" || data.message === "ACCOUNT CREATED SUCCESSFULLY")
      {
        alert(data.message);
        updatedata({
          name:loginname,
        })
      }
      else if(data.message === "INVALID USERNAME. FIRST SIGN UP PLEASE")
      {
        alert(data.message);
      }
      else
      {
        alert("TRY ONCE AGAIN")
      }
    })
}

  return (
    <section className='loginsection'>
      <div className='logincontent container'>
      <div className="logincontainer">
        <h1>{islogin ? "Login":"Sign Up"}</h1>
        <input type="text" className='logininput' id="username" placeholder='Enter Username'required/>
        {islogin ? <div></div>:<input type="email" className='logininput' id="email" placeholder='abcd@example.com' required/>}
        <input type="password" className='logininput' id="password" placeholder='Enter Password' required/>
  
  <button type="submit" class="btn btn-primary" onClick={handledata}>{islogin ? "Login":"Sign Up"}</button>
  <div className='signup' onClick={handlechange}>Don't Have an Account? Sign Up</div>
      </div>
      </div>
    </section>
  )
}

export default Login
