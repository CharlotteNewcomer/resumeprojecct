import React from 'react';
import { organInfo} from '../../../data.js';
const images = require.context('../Images', true);

const Lesson = () => {
   
    return(
        <div className='ba  '>
            <img className='pa2  ' src={images(organInfo.liver.image)} alt='pic of organ' />
            { organInfo.liver.text.map (function (textContent) {
                return(
                <div className='pa2 f4 w-50 fl mt3'>
                    {textContent}
                </div>
                )
            })}
            
        </div>
    )
    
  }
  
  export default Lesson;

