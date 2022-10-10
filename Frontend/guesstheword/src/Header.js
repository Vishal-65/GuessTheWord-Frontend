import React from 'react';
import './App.css';
import Logo from './Logo.png';
import backgroundImg from './backgroundImg.jpg';
import { Outlet, Link } from "react-router-dom";
import Button from './Button';
  
function Header() {
    const getCookie = (cname) => {

        let name = cname + "=";
    
        let decodedCookie = decodeURIComponent(document.cookie);
    
        let ca = decodedCookie.split(';');
    
        for (let i = 0; i < ca.length; i++) {
    
            let c = ca[i];
    
            while (c.charAt(0) == ' ') {
    
                c = c.substring(1);
    
            }
    
            if (c.indexOf(name) == 0) {
    
                return c.substring(name.length, c.length);
    
            }
        }
        return "";
    } 
    const signoutHandler = () => {
    
        console.log("logout")
    
        console.log(window.location);
    
        document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
        window.location.href = '/'; 
    }
    
    


    return (
        <nav class="navbar background">
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

                    
                  <button className='buttons' ><a href="/Logout"><h1>Logout</h1></a> </button> 

                 
                 
                   
                    
                   &ensp;
                   &ensp;
                   &ensp;                  
        
          </span>
          </div>
         </nav>   
    )}
    export default Header;
