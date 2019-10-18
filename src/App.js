// cd ../..//mnt/c/users/thene/documents/char/resume_projects/project/digestivetractlesson
import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Menu from './components/Menu/Menu';
import Content from './components/Content/Content';
import Title from './components/Title/Title.js';
import {userInfo} from './data.js';
import './App.css';
import 'tachyons';


class App extends Component {
  constructor () {
		super()
		this.state={
			page: 'liver',
      signedIn: true,  
    }
	}
/** **check grid out... see if works better than tachyons** trying to center menu vertically on content */
  render() {
    return (
      <div className="App">
        <div className='flex items-center justify-between'>
          <Logo />
          <Title />
          <Navigation />
        </div>
        <div className='mainBody'>
          <Menu />
          <Content  userInfo={userInfo}/>
        </div>
               
      </div>
    );
  }
}

export default App;
