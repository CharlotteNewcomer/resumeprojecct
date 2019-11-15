import React from 'react';
import Audio from './Audio/Audio';
import Lesson from './Lesson/Lesson';
import Game from './Game/Game';
import Info from './Info/Info';
import ContentNav from './ContentNav/ContentNav';
import './Content.css';
import mainmenu from './Images/mainmenu.png';
import mmhlgintestines from './Images/mmhlargeintestines.png';
import mmhliver from './Images/mmhliver.png';
import mmhpancreas from './Images/mmhpancreas.png';
import mmhsmintestines from './Images/mmhsmallintestines.png';
import mmhstomach from './Images/mmhstomach.png';

const Content = ({userInfo, onPageChange, page, homePic, onHighlight, showCoords}) => {
/** * need to make so quiz shows when quiz clicked on (need to make quiz component)
 * also want to show quiz result if taken quiz - highlight content that they need to learn better
 * need to organize content better
 **/

  function homeMenu(){
    switch (homePic) {
      case 'home':
        return (  
          <img  id='menu' className='menu ba'style={{width:'100%', height:'auto' }} onMouseDown={showCoords} alt='Digestive System' src={mainmenu} useMap="#Map"/> 
        );
      case 'liver':
        return (
          <img  id='menu' className='menu'style={{width:'100%', height:'auto' }} alt='Digestive System' src={mmhliver} useMap="#Map"/> 
        );
      case 'pancreas':
          return (
            <img  id='menu' className='menu'style={{width:'100%', height:'auto' }} alt='Digestive System' src={mmhpancreas} useMap="#Map"/> 
          );
      case 'stomach':
        return (
          <img  id='menu' className='menu'style={{width:'100%', height:'auto' }} alt='Digestive System' src={mmhstomach} useMap="#Map"/> 
        );
      case 'smintestines':
          return (
            <img  id='menu' className='menu'style={{width:'100%', height:'auto' }} alt='Digestive System' src={mmhsmintestines} useMap="#Map"/> 
          );  
      case 'lgintestines':
          return (
            <img  id='menu' className='menu'style={{width:'100%', height:'auto' }} alt='Digestive System' src={mmhlgintestines} useMap="#Map"/> 
          );  
      default:
        return (
          <div> Mainmenu is not working.  There is an error. </div>
        )
    }
  }

  switch(page){
    case 'Home':
      return (
        <div className='pa2 f4 home'> 
          {homeMenu()}
          <map name="Map" id="Map">
            <area shape="rect" coords="417,261,590,316" onClick={()=>onPageChange('Stomach')} alt="Stomach" onMouseOver= {()=> onHighlight('stomach')} onMouseOut={()=>onHighlight('home')}/>
            <area shape="rect" coords="18,366,164,404" onClick={()=>onPageChange('Pancreas')} alt="Pancreas" onMouseOver={()=>onHighlight('pancreas')} onMouseOut={()=>onHighlight('home')}/>
            <area shape="rect" coords="412,457,684,507" onClick={()=>onPageChange('Small Intestines')} alt="Small Intestines" onMouseOver= {()=>onHighlight('smintestines')} onMouseOut={()=>onHighlight('home')}/>
            <area shape="rect" coords="27,223,115,297" onClick={()=>onPageChange('Liver')} alt="Liver" onMouseOver={()=>onHighlight('liver')} onMouseOut={()=>onHighlight('home')} />
            <area shape="rect" coords="412,379,684,423" onClick={()=>onPageChange('Large Intestines')} alt="Large Intestines" onMouseOver={()=>onHighlight('lgintestines')} onMouseOut={()=>onHighlight('home')} />
          </map>
        </div>
      );
    case 'Stomach':
    case 'Liver':
    case 'Pancreas':
    case 'Small Intestines':
    case 'Large Intestines':
      return (
        <div className='pa2 fr  mr3'>
          <div className='flex items-center justify-between'>
            <Lesson className='w-80' userInfo={userInfo} page={page}/>
            <Audio className='w-20'/>
          </div>
          <ContentNav className='w-80'/> 
        </div>
      );
    case 'Game':
      return (
        <div className='pa2 fr  mr3'>
          <Game className='' page={page}/> 
        </div>
      );
    case 'Help':
    case 'Site Map':
    case 'Credits':
      return (
        <div className='pa2 fr  mr3'>
          <Info className='' page={page}/> 
        </div>
      );
    default:
      return (
        <div className='pa2 f4'> Missing Content </div>
      );
  }
   
}

export default Content;