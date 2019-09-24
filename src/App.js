import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Menu from './components/Menu/Menu';
import Content from './components/Content/Content';
import Title from './components/Title/Title.js';
import './App.css';
import 'tachyons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='flex items-center justify-between'>
          <Logo />
          <Title />
          <Navigation />
        </div>
        <div className='cf'>
          <Menu/>
          <Content />
        </div>
                
      </div>
    );
  }
}

export default App;
