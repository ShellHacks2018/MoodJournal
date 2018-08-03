import React, { Component } from 'react';
import NavbarComponent from './Components/Navbar/NavbarComponent.js';
import './styles/App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavbarComponent/>      
      </div>
    );
  }
}

export default App;
