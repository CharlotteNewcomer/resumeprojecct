import React from 'react';
import { organInfo} from '../../../data.js';
const images = require.context('../Images', true);

const Lesson = () => {
   
    return(
        <div className='ba  w-80'>
            <img className='pa2 ' src={images(organInfo.liver.image)} alt='pic of organ' />
            <div className='pa2 f4'> {organInfo.liver.text[0]}</div>
            <div className='pa2 f4'> {organInfo.liver.text[1]}</div>
            <div className='pa2 f4'> {organInfo.liver.text[2]}</div>
        </div>
    )
    
  }
  
  export default Lesson;

//  united visa- call- 
//      see if removing hold $200 from car rental last Week
//      see when $610 payment will post
//      see if pre-auth is going through for next rental ($500)