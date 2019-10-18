import React from 'react';
import Audio from './Audio/Audio';
import Lesson from './Lesson/Lesson';
import ContentNav from './ContentNav/ContentNav';

const Content = (userInfo) => {
/** **check grid out... see if works better than tachyons** trying to center contentnav horizontially on lesson ..and trying to close gap between them 
 * need to make so quiz shows when quiz clicked on (need to make quiz component)
 * also want to show quiz result if taken quiz - highlight content that they need to learn better
 * need to organize content better
*/
  return(
    <div className='pa2 fr  mr3 ba'>
       <div className='flex items-center justify-between'>
         <Lesson userInfo={userInfo}/>
          <Audio/>
       </div>
        <ContentNav/> 
    </div>
  )
  
}

export default Content;