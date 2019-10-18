import React from 'react';
import './ContentNav.css';
//Need to have quiz show on lesson and prev/next on quiz
const ContentNav = () => {
    return(
      <div className='fl  flex justify-between ba'>

        <div className='w-20 f6 flex items-center justify-center optname'>Prev</div>
        <div className='w-20 f6 flex items-center justify-center optname'>Quiz</div>
        <div className='w-20 f6 flex items-center justify-center optname'>Next</div>
      
      </div>
    )
    
  }
  
  export default ContentNav;