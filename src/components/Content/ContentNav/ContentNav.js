import React from 'react';
import './ContentNav.css';

const ContentNav = () => {
    return(
      <div className='ma5 fl w-60 flex justify-between'>

        <div className='w-20 f6 flex items-center justify-center optname'>Prev</div>
        <div className='w-20 f6 flex items-center justify-center optname'>Quiz</div>
        <div className='w-20 f6 flex items-center justify-center optname'>Next</div>
      
      </div>
    )
    
  }
  
  export default ContentNav;