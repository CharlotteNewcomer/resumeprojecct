import React from 'react';
import Button from '../Button/Button';


import 'tachyons';
//onPageChange={()=>onPageChange}
//buttons for organs that passed test on should show that the test was passed- change color of bandaid or text
//need to make components for home, game, help, site map, credits and exit/login page
const Menu = ({onPageChange, page}) => {
  return( 
    
    <div className=' '>
        <Button  onPageChange={onPageChange} />
    </div>
   
  )
}

export default Menu;