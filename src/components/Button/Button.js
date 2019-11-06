import React from 'react';
import './Button.css';

const pages = ['Home', 'Stomach', 'Liver', 'Pancreas', 'Small Intestines', 'Large Intestines', 'Game', 'Help', 'Credits', 'Sign Out']

const Button = ({onPageChange, page}) => {
  return(
    <div className='btnMenu '>
      { pages.map (function (onePage) {
        if (onePage!==page){
          if( (onePage==='Small Intestines') || (onePage==='Large Intestines' )){
            return(
              <div onClick={() => onPageChange(onePage)} className="cf optname1">
                {onePage}
              </div>
            )
          } else {
            return(
              <div onClick={() => onPageChange(onePage)} className="cf flex items-center justify-center optname">
                {onePage}
              </div>
            )
          }
        } else {
          return false;
        }
        
      })}
    </div> 
  )
  
}

export default Button;