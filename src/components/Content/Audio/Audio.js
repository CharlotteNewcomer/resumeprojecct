import React from 'react';
import pic from "../Images/Doctor.png";
import "../../Button/Button.css";

const Audio = () => {
    return(
       <div className=' fr items-center justify-center' >
           <div className=' optname flex items-center justify-center ' >Audio</div>
           <img src={pic} alt="doctor" style={{width:'150px' }}/>
        </div> 
    )
    
  }
  
  export default Audio;