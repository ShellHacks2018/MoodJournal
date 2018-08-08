import React, { Component } from 'react';
import NavbarComponent from './Components/NavbarComponent.js';
import CalendarPageComp from './Pages/CalendarPageComp.js';
import SelectionPageComp from './Pages/SelectionPageComp.js';
import LandingPageComp from './Pages/LandingPageComp.js';
import PageNotFoundComp from './Pages/PageNotFoundComp.js';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './styles/App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavbarComponent/>  
            <Switch> 
              <Route exact path="/" component={LandingPageComp}/>
              <Route path="/welcome" component={LandingPageComp}/>
              <Route path="/calendar" component={CalendarPageComp}/>
              <Route path="/selection" component={SelectionPageComp}/>
              <Route component={PageNotFoundComp} />
            </ Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
