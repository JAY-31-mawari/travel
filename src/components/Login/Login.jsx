import React,{useState} from 'react'
import '../About/about.css'
import TravelContext from '../../state/TravelContext'

const Login = () => {
  
const [islogin,setislogin]=useState(true)

const handlechange = () =>{
  setislogin(!islogin);
}

  return (
    <section className='loginsection'>
      <div className='logincontent container'>
      <div className="logincontainer">
        <div className='login'><h2>{islogin?"Login":"Sign Up"}</h2></div>
      <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Username</label>
    <input type="text" class="form-control" id="exampleInputPassword1" required />
  </div>
  {islogin ? <div></div>:<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
  </div>}
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" required />
    <div id="emailHelp" class="form-text">We'll never share your password with anyone else.</div>
  </div>
  <button type="button" class="btn btn-primary">{islogin ? "Login":"Sign Up"}</button>
  <a href="#" onClick={handlechange}>Don't Have an Account ? Sign Up</a>
      </div>
      </div>
    </section>
  )
}

export default Login
