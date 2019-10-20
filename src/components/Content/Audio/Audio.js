import React from 'react';
import pic from "../Images/Doctor.png";
//import '../ContentNav/ContentNav.css';

const Audio = () => {
    return(
       <div className=' fr items-center justify-center' >
           <div className=' optname f6 flex items-center justify-center w-100' style={{height:'6vh'}}>Audio</div>
           <img src={pic} alt="doctor" style={{maxHeight:'500px' }}/>
        </div> 
    )
    
  }
  
  export default Audio;