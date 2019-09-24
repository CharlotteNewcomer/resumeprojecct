import React from 'react';
import './ContentNav.css';

const ContentNav = () => {
    return(
      <div className='ma5 flex justify-between'>

        <div className='w-20 pa2 btn'>Prev</div>
        <div className='w-20 pa2 btn'>Quiz</div>
        <div className='w-20 pa2 btn'>Next</div>
      
      </div>
    )
    
  }
  
  export default ContentNav;