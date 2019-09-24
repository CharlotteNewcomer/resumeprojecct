import React from 'react';
import pic from '../Images/pic.png';

const Lesson = () => {
    return(
        <div className='ba h3 w-80'>
            <img src={pic} alt='pic of organ' />
            <div> Text about organ</div>
            <div>More text about organ</div>
            <div>And even more ...</div>
        </div>
    )
    
  }
  
  export default Lesson;