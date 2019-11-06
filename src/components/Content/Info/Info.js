import React from 'react';
import {infoInfo} from '../../../data.js';
import './Info.css';


const Info = ({page}) => {
   if (page==='Help'){
       return(
        <div className=''> 
           <h2 className='f3'>What is this program for?</h2>
           <p className='f5'>The Digestive System program is to help 5th graders who attend school in Florida and are required to have specific understanding about the functions and locations of certain organs of the human anatomy.  This program specifically focuses on the organs in the digestive system.</p>
            <h2 className='f3'>Instructions:</h2>
            <ul className='f5'>
                <li>You will be assigned a user name and password by your teacher.</li>  
                <li>You will learn about the functions and locations of the different organs in the digestive system.</li>
                <li>When you finish each lesson, you will take quiz.</li>
                <li>If you pass the quiz, you do not need to take it again and the button for that organ and its quiz will be green.  If you do not pass, then you will be asked to redo the lesson and the button for that organ and quiz will be red.</li>
                <li>You will have access to "The Organ Donor" game to review for your quizzes and final test.</li>
                <li>Once you complete all lessons and quizzes, you will have access to take the final test.</li>
                <li>Good Luck!!!</li>
            </ul>
         </div>
    )
   }  else if (page==='Credits'){  
       console.log(infoInfo.Images.publicDomain);  
        return(
            <div className='ba '>
                <p>{infoInfo.CreditsNote}</p>
                <h3>Images</h3>
                <ul>
                    {infoInfo.Images.publicDomain.map(function (obj){
                        return(
                            <li><a href= {obj.link} >{obj.picName}</a> is licensed under <a href='https://creativecommons.org/publicdomain/zero/1.0/'> Public Domain </a></li>
                            )
                    })}
                    {infoInfo.Images.creativeCommons.map(function (obj){
                        return(
                            <li><a href= {obj.link}>{obj.picName}</a> by <a href='www.servier.com'> Servier </a>  is licensed under  <a href='https://creativecommons.org/licenses/by/3.0/'> `CC BY 3.0` </a></li>
                            )
                    })}
                </ul>
                <br/>
                <h3> IDT Team </h3>
                <ul>
                    {infoInfo.IDTteam.map(function (obj){
                        return(
                            <li>{obj}</li>
                            )
                    })}
                </ul>
            </div>
        )
    } else {
    return(
        <div className='ba  '>
            Error... {page} is not working correctly.           
        </div>
        )
    }
  }
  
  export default Info;
  /*  }
    */