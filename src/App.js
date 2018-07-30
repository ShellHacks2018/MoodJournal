import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CrisComponent from './Components/CrisComponent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Mood Journal</h1>
        </header>
        <CrisComponent />
      </div>
    );
  }
}

export default App;
