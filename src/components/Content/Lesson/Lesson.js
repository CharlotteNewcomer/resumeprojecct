import React from 'react';
import { organInfo} from '../../../data.js';
const images = require.context('../Images', true);

const Lesson = ({page}) => {
        return(
        <div className='ba  '>
            <img className='pa2  ' src={images(organInfo[page].image)} alt='pic of organ' />
            { organInfo[page].text.map (function (textContent) {
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

