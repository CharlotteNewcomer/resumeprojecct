import React from 'react';
import './Button.css';
//
const pages = ['Home', 'Stomach', 'Liver', 'Pancreas', 'Small Intestines', 'Large Intestines', 'Game', 'Help', 'Site Map', 'Credits', 'Sign Out']

const Button = ({onPageChange}) => {
  return(
    <div className='btnMenu '>
      { pages.map (function (page) {
        return(
          <div onClick={() => onPageChange(page)} className="f6 optname">
            {page}
        </div>
        )
      })}
    </div> 
  )
  
}

export default Button;