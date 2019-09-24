import React from 'react';
import Audio from './Audio/Audio';
import Lesson from './Lesson/Lesson';
import ContentNav from './ContentNav/ContentNav';

const Content = () => {
  return(
    <div className='pa2 fr w-80'>
       <div className='flex items-center justify-between'>
         <Lesson/>
          <Audio/>
       </div>
        
        <ContentNav/> 
    
    </div>
  )
  
}

export default Content;