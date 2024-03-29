import React from 'react';
import Tilt from 'react-tilt';
import logo from '../Content/Images/logo.png';
import './Logo.css';

const Logo = () => {
  return(
     <div className='ma4'>
         <Tilt className='Tilt br2 shadow-2' options={{ max : 35 }} style={{ height:60, width: 60}}>
             <div className='Tilt-inner '><img style={{ height:60, width: 60}} alt='logo' src={logo}/></div>
         </Tilt>
    
   </div>
  )
  
}

export default Logo;