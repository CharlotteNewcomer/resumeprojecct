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
			page: "Home", 
      homePic: "home",
      highlighted: false,
      signedIn: true
    }
  }

showCoords = (Event) => {
    var y = Event.screenY;
    var x = Event.screenX;
    console.log ("X coords: " + x + ", Y coords: " + y);
}

onPageChange = (page) => {
  // if (this.state.page === 'sign out') {
  //   this.setState({signedIn: false})
  // } else  {
  //   this.setState({signedIn: true})
  // }
  if (this.state.signedIn===true){
    this.setState({page: page});
    this.setState.homePic='home'
  }
}

onHighlight = (homePic) => {
 if (this.state.highlighted === false) {
    this.setState({homePic:homePic});
    this.setState({highlighted:true});
   } else  {
     this.setState({homePic: 'home'});
     this.setState({highlighted:false});
   }
}

  render() {
    const {signedIn, page, homePic, onPageChange}= this.state;
    if (signedIn===true){
       return (
        <div className="App" >
          <div className='flex items-center justify-between'>
            <Logo />
            <Title page={page}/>
            <Navigation signedIn={signedIn} onPageChange={onPageChange}/>
          </div>
          <div className='mainBody'>
            <Menu  signedIn={signedIn} onPageChange={this.onPageChange} page={page}/>
            <Content showCoords={this.showCoords} userInfo={userInfo} onPageChange={this.onPageChange} page={page}  homePic={homePic} onHighlight={this.onHighlight}/>
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
