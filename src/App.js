import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CrisComponent from './Components/CrisComponent.js';
import MauricioComponent from './Components/MauricioComponent.js';
import AmyComponent from './Components/AmyComponent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Mood Journal</h1>
        </header>
        <CrisComponent />
        <MauricioComponent />
        <AmyComponent />
      </div>
    );
  }
}

export default App;
