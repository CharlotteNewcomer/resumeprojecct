import React from 'react';
import { organInfo} from '../../../data.js';
import './lesson.css';
const images = require.context('../Images', true);

const Lesson = ({page}) => {
        return(
        <div className='  '>
            <img className='pa2'   src={images(organInfo[page].image)} alt='pic of organ' />
            { organInfo[page].text.map (function (textContent) {
                return(
                <p className='pa2 f4 w-50 fl'>
                    {textContent}
                </p>
                )
            })}
            
        </div>
    )
    
  }
  
  export default Lesson;

