import React from 'react';
import Audio from '../Audio/Audio';
//import {GameInfo} from '../../../data.js';
import picLiver from "../Images/Liver.png";
import picPancreas from "../Images/pancreas.png";
import picStomach from "../Images/stomach.png";
import picSmIntestines from "../Images/S-intestine.png";
import picLgIntestines from "../Images/LGintestines.png";
import picBucket from "../Images/bucket.png";
import './Game.css';


const Game = () => {
    return(
        <div className='flex items-center justify-between'>
            <div className='w-60'>
                <div className='flex'>
                    <Audio />
                    <div >
                        question
                    </div> 
                </div>
               <img className='pa2'   src={(picBucket)} alt='bucket' />
            </div>
            
            <div className='w-40 game' >
                <img className='smintestines' src={(picSmIntestines)} alt='Small Intestines' />
                <img className='pancreas' src={(picPancreas)} alt='Pancreas' />
                <img className='stomach' src={(picStomach)} alt='Stomach' />
                <img className='lgintestines' src={(picLgIntestines)} alt='Large Intestines' />
                <img className='liver' src={(picLiver)} alt='Liver' />
            </div>
        </div>
    )
    
}
  
  export default Game;