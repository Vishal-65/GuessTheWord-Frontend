import React from 'react';
import './App.css';
import Logo from './Logo.png';
import backgroundImg from './backgroundImg.jpg';  
import './Home.css';
import { Link } from 'react-router-dom';

  
function Home() {
    return (
        <div >
            {
             <nav class="navbar background">
                    <div class="logo">
                        <img src={Logo} height="150px"/> 
                   
                    <span style={{float:'right', marginTop:'8%'}}>  
                    <h1 class="heading">WORDMANIA</h1>
                    &ensp;
                    &ensp; 
                

                    
                     <button className='buttons' ><a href="/Home"><h1>Home</h1></a> </button> 
                   
                    
                    &ensp;
                    &ensp;
                    &ensp;
                   
                    <button className='buttons'> <a href="/Loginc"><h1>Login</h1> </a></button>
                    
                    &ensp;
                    &ensp;
                    &ensp;

                   
                    <button className='buttons'><a href="/Registerc"><h1>Registration</h1></a> </button>
                    &ensp;
                    &ensp;
                    &ensp;
                   
                    
                    <button className='buttons'><a href="/AboutUs"><h1>AboutUs</h1></a> </button>
                    &ensp;
                    &ensp;
                    &ensp;
            
             </span>
             </div>
            </nav>   } 

             <body class="bgimg">

                <img src={backgroundImg}></img>
             
             </body>

           
  
           
        <footer className="footer">
                <p className="text-footer">
                    <a href="#Terms Of Use" >Terms Of Use</a>&ensp; &ensp;  <p>  |  </p>&ensp; &ensp;<a href="#Privacy" >Privacy</a>
                </p>
            </footer> 
            
        
        </div>

    );
        
}
  
export default Home 