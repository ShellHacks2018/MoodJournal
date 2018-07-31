import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EmojiComponent from './Components/Emoji/EmojiComponent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Mood Journal</h1>
        </header>
        
        <div className="container">
          <div className="row my-5">
            <div class="col-sm">
              <EmojiComponent emotion="Happy"/>
            </div>
            <div className="col-sm">
              <EmojiComponent emotion="sad"/>
            </div>
            <div className="col-sm">
              <EmojiComponent emotion="angry"/>
            </div>
            <div className="col-sm">
              <EmojiComponent emotion="neutral"/>
            </div>
          </div>
        </div>

        <div className = "container">
          <div className="row my-5 d-flex align-item-center">
            <div class="col-lg">
              <EmojiComponent />
            </div>
          </div>

        </div>



      </div>
    );
  }
}

export default App;
