import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import reportWebVitals from './reportWebVitals';

import Header from './Header';
import Footer from './Footer';

import Main from './Main';
import { BrowserRouter } from 'react-router-dom';
import { unregister } from './serviceWorker';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <React.StrictMode>    
    {/* <Registration/> */} 
   
    <App/>
   

  </React.StrictMode>
  </BrowserRouter>

  
  
  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
ServiceWorker.unregister();

