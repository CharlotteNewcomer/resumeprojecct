import React from 'react';
import './Button.css';

const pages = ['Home', 'Stomach', 'Liver', 'Pancreas', 'Small Intestines', 'Large Intestines', 'Game', 'Help', 'Site Map', 'Credits', 'Exit']

const Button = () => {
  return(
    <div className='btnMenu'>
      { pages.map (function (page) {
        return(
          <div className="f6 optname flex items-center justify-center ">
            {page}
        </div>
        )
      })}
    </div> 
  )
  
}

export default Button;