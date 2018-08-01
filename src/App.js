import React, { Component } from 'react';
import './styles/App.css';
import SelectionPageComp from './Components/Pages/SelectionPageComp.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Mood Journal</h1>
        </header>
        
        <SelectionPageComp />

      </div>
    );
  }
}

export default App;
