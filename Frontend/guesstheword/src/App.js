import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"; 
import Home from './Home';

import AboutUs from './AboutUs';
import Main from './Main';
import Registerc from './Registerc';
import Loginc from './Loginc';
import Logout from './Logout';
import GameConsole from './Component/GameConsole';
import Letter from './Component/Letter';
import Payment from './Payment';



function App() {
  return (
    
<Routes >
<Route  path="/" element={<Home  />}/>
<Route path="/Home" element={<Home />} />
<Route path="/Loginc" element={<Loginc />} />
<Route path="/Registerc" element={<Registerc />} />
<Route path="/AboutUs" element={<AboutUs />} />  
<Route path="/Main" element={<Main />}/>
<Route path="/Logout" element={<Logout/>}/> 
<Route path="/GameConsole" element={<GameConsole/>}/>
<Route path="/Payment" element={<Payment/>}/>
   
</Routes>
  
);}

export default App;
