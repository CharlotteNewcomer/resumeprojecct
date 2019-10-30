import React from 'react';

const Navigation = ({onPageChange}) => {
  return(
     <nav className='fr pa2'>
     <p onClick={() => onPageChange('sign out')} className='f5 link dim pa3 pointer'>Sign Out</p>
   </nav>
  )
  
}

export default Navigation;