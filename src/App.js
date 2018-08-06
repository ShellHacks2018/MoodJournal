import React, { Component } from 'react';
import NavbarComponent from './Components/Navbar/NavbarComponent.js';
import CalendarPageComp from './Components/Pages/CalendarPageComp.js';
import SelectionPageComp from './Components/Pages/SelectionPageComp.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './styles/App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavbarComponent/>  
            <Switch> 
              <Route exact path="/" component={CalendarPageComp}/>
              <Route path="/calendar" component={CalendarPageComp}/>
              <Route path="/selection" component={SelectionPageComp}/>
            </ Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
