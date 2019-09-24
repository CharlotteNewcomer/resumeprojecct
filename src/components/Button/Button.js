import React from 'react';
import './Button.css';

const pages = ['Home', 'Stomach', 'Liver', 'Pancreas', 'Small Intestines', 'Large Intestines', 'Game', 'Help', 'Site Map', 'Credits', 'Exit']

const Button = () => {
  return(
    <div>
      { pages.map (function (page) {
        return(
          <div className="optname flex items-center justify-center ">
            {page}
        </div>
        )
      })}
    </div> 
  )
  
}

export default Button;