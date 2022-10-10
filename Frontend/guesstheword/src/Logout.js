function Logout(){
    function preventBack(){window.history.forward();}
    setTimeout("preventBack()", 0);
    window.location.href = '/';
    //window.onunload=function(){null};
    return (
      <button onClick={preventBack}></button>  
    );
}
export default Logout;