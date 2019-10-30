import React from 'react';
import Audio from './Audio/Audio';
import Lesson from './Lesson/Lesson';
import Info from './Info/Info';
import ContentNav from './ContentNav/ContentNav';

const Content = ({userInfo, page}) => {
/** * need to make so quiz shows when quiz clicked on (need to make quiz component)
 * also want to show quiz result if taken quiz - highlight content that they need to learn better
 * need to organize content better
*/
switch(page){
  case 'Home':
      return (<div className='pa2 f4'> Home page goes here </div>);
  case 'Stomach':
  case 'Liver':
  case 'Pancreas':
  case 'Small Intestines':
  case 'Large Intestines':
      return (
        <div className='pa2 fr  mr3'>
          <div className='flex items-center justify-between'>
            <Lesson className='w-80' userInfo={userInfo} page={page}/>
            <Audio className='w-20'/>
          </div>
          <ContentNav className='w-80'/> 
        </div>);
  case 'Game':
      return (<div className='pa2 fr  mr3'>Game goes here</div>);
  case 'Help':
  case 'Site Map':
  case 'Credits':
      return (
        <div className='pa2 fr  mr3'>
          <Info className=''/> 
        </div>
        );
  default:
      return (
        <div className='pa2 f4'> Missing Content </div>
        );
}
   
}

export default Content;