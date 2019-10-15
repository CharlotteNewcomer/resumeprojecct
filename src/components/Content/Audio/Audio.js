import React from 'react';
import pic from "../Images/Doctor.png";
import '../ContentNav/ContentNav.css';

const Audio = () => {
    return(
       <div className=' fr w-20 items-center justify-center' >
           <div className=' btn  flex items-center justify-center ' style={{height:'6vh'}}>Audio</div>
           <img src={pic} alt="doctor" style={{maxHeight:'400px' }}/>
        </div> 
    )
    
  }
  
  export default Audio;