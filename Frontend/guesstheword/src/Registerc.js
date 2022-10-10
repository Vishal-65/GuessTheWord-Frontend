import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router';
import './Registerc.css';
import Header from "./Header";
import Logo from './Logo.png';


function Registerc(){

  const navigate=useNavigate();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");

    const errors = {
      pass: "invalid password",
      noerr: ""
    };

  const data={
    "username":username,
    "password":password
  };


  const Validate = (values) => {
    const error = {};
    
    if (!values.username) {
      error.username = "Username is required!";
    
    }
    else if(values.username.length<4){
      error.username="User name must be more than 4 characters";
    }

    if (!email) {
      error.email = "Email is required!";
    } else if (!regex.test(email)) {
      error.email = "This is not a valid email format!";
    }
    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 4) {
      error.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      error.password = "Password cannot exceed more than 10 characters";
    }
    return error;
  };

  const onInputChangeUsername = event => {
    setUserName(event.target.value)
}

const onInputChangePassword = event => {
    setPassword(event.target.value)
}
const onInputChangeEmail= event => {
  setEmail(event.target.value)
}

const onChangePassword = event => {
  let value=event.target.value;
  if(value!=password){
     setErrorMessages({ name: "pass", message: errors.pass });
  }
  else{
    setErrorMessages({name: "noerr",message: errors.noerr})
  }
}
  const insertAction= async(e)=>{   
    e.preventDefault();
    if(!data.username || !data.password || !email||!regex.test(email)){ 
    setFormErrors(Validate(data));}
   else{
   await axios.post('http://localhost:8080/api/auth/signup',data).then(
    (response) => { 
        console.log(response);
        if (response.status==200) {
          setIsSubmitted(true);
            alert("Registration successful"); 
        }
    }, (error) => {
      alert("Operation failed");
    }
);
   }
    
     };

     const renderErrorMessage = (name) =>
    name!=password && (
      <div className="error">{errorMessages.message}</div>
    ) ;

     
      const renderForm = (

        <div><nav class="navbar background">
        <div class="logo">
            <img src={Logo} height="150px"/> 
        
         <span style={{float:'right', marginTop:'9%',marginRight:'10%'}}>  
          <h1 class="heading">WORDMANIA</h1>
          &ensp;
          &ensp;  

          <button className='buttons' ><a href="/Home"><h1>Home</h1></a> </button> 
            
             
             &ensp;
             &ensp;
             &ensp;

             <button className='buttons' ><a href="/Payment"><h1>Purchase</h1></a> </button> 
             &ensp;
             &ensp;
             &ensp;
             <button className='buttons' ><a href="/AboutUs"><h1>AboutUs</h1></a> </button> 
                
 
   </span>
   </div>
  </nav>   
        <div>

          <div className="bg">
                           
    <div class="register-wrapper">
      <form action="" class="form">
        <h2   >Register</h2>
        <div class="input-group">
         <input type="text" name="username" id="loginUser" required  value={username} 
         onChange={(e) =>  onInputChangeUsername(e)}/>
          <label for="loginUser">User Name</label>
        </div>
        <p className="valid">{formErrors.username}</p>
        <div class="input-group">
         <input type="text" name="loginUser" id="Email"  onChange={e => onInputChangeEmail(e)} required  />
          <label for="loginUser">Email </label>
        </div>
        <p className="valid">{formErrors.email}</p>
        <div class="input-group">
          <input
            type="password"
            name="password"
            id="loginPassword"
            required
            value={password} 
         onChange={(e) => onInputChangePassword (e)}
          />
          <label for="loginPassword">Password</label>
        </div>
        <p className="valid">{formErrors.password}</p>

        <div class="input-group">
          <input
            type="password"
            name="loginPassword"
            id="loginPassword"
            onChange={e => onChangePassword(e)}
            required
          />
          <label for="loginPassword">Retype Password</label>
        </div>
      {renderErrorMessage("loginPassword")}

       

        <input type="submit" value="Register" class="submit-btn" onClick={(e) => insertAction(e)}/>
      </form>
    </div>


    </div>
    </div>  
            </div>
            
          );
    return(
      <div>
     
      {isSubmitted ? navigate("/Loginc") : renderForm}
    
      </div>
    
    );
}
    export default Registerc;