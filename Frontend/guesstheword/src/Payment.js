import './Payment.css';
import Header from './Header';
import Footer from './Footer';

function Payment(){
 
    const buy=()=>{ 
        alert("Purchased Successfully!!!");

    }

    return(
<div><Header/>
        <div className="bodyBox">
           <div className="IncreaseOfTime">
            <h3>To Increase The Game Timing for 20Sec -- $5</h3> 

                <button className="Buy" onClick={buy}> Buy</button>
           </div>
           &ensp;
           <div className="IncreaseOfTime" onClick={buy}>
            <h3>To get The Different Themes (Unlimited Access) --$10 </h3> 

                <button className="Buy"> Buy</button>
           </div>
           &ensp;
           <div className="IncreaseOfTime" onClick={buy}>
            <h3> For ADD-Free Game -- $7</h3> 

                <button className="Buy"> Buy</button>
           </div> 
           &ensp;
           <div className="IncreaseOfTime" onClick={buy}>
            <h3> To Opt Multi-Gaming -- $15</h3> 

                <button className="Buy"> Buy</button>
           </div>

        </div> 

   
       
        <div>
         <footer className="footerp">
         <p className="text-footerp">
             Terms Of Use | Privacy
         </p>
     </footer>
     </div>
     </div>
        
    );
       

    
}
export default Payment