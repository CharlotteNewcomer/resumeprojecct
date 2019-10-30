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
			page: 'Liver',
      signedIn: true,  
    }
  }
  
onPageChange = (page) => {
  if (page === 'sign out') {
    this.setState({signedIn: false})
  } else  {
    this.setState({signedIn: true})
  }
 // if (signedIn===true){
    this.setState({page: page});
 // }
  
  
}

  render() {
    const {signedIn, page}= this.state;
    if (signedIn===true){
       return (
        <div className="App">
          <div className='flex items-center justify-between'>
            <Logo />
            <Title page={page}/>
            <Navigation signedIn={signedIn} onPageChange={this.onPageChange}/>
          </div>
          <div className='mainBody'>
            <Menu  signedIn={signedIn} onPageChange={this.onPageChange} page={page}/>
            <Content  userInfo={userInfo} page={page}/>
          </div>           
        </div>
      );
    } else {
      return (
        <div> You need to sign in... page to be designed</div>
      )
    }
   
  }
}

export default App;
