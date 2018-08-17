import React, { Component } from 'react';
import NavbarComponent from './Components/NavbarComponent.js';
import CalendarPageComp from './Pages/CalendarPageComp.js';
import SelectionPageComp from './Pages/SelectionPageComp.js';
import LandingPageComp from './Pages/LandingPageComp.js';
import PageNotFoundComp from './Pages/PageNotFoundComp.js';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './styles/App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      auth: false
    }
  }

  updateAuth = (auth) => {
    this.setState({auth: auth});
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavbarComponent currentAuth={this.state.auth} authUpdate = {this.updateAuth} />
            <Switch>
              <Route exact path="/" render={props => <LandingPageComp auth = {this.updateAuth} />} />
              <Route path="/welcome" render={props => <LandingPageComp auth = {this.updateAuth} />} />
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