import React from 'react';
import { organInfo} from '../../data.js';

const Title = ({page}) => {
    switch(page){
        case 'Home':
            return (<h1 className='pa2 f1'> Home </h1>);
        case 'Stomach':
        case 'Liver':
        case 'Pancreas':
        case 'Small Intestines':
        case 'Large Intestines':
            return (<h1 className='pa2 f1'> {organInfo[page].heading} </h1>);
        case 'Game':
            return (<h1 className='pa2 f1'> Game </h1>);
        case 'Help':
            return (<h1 className='pa2 f1'> Help </h1>);
        case 'Site Map':
            return (<h1 className='pa2 f1'> Site Map </h1>);
        case 'Credits':
            return (<h1 className='pa2 f1'> Credits </h1>);
        default:
            return (<h1 className='pa2 f1'> </h1>);
    }

}

export default Title;