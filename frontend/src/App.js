import React, { Component } from 'react'
import NavbarComponent from './Components/NavbarComponent.js'
import CalendarPageComp from './Pages/CalendarPageComp.js'
import SelectionPageComp from './Pages/SelectionPageComp.js'
import LandingPageContainer from './Pages/LandingPageContainer.js'
import PageNotFoundComp from './Pages/PageNotFoundComp.js'

import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './styles/App.css'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className='App'>
          <NavbarComponent />
          <Switch>
            <Route exact path='/' component={LandingPageContainer} />
            <Route path='/welcome' component={LandingPageContainer} />
            <Route path='/calendar' component={CalendarPageComp} />
            <Route path='/selection' component={SelectionPageComp} />
            <Route component={PageNotFoundComp} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

// Tell redux what part of state you want
// made available inside this component via this.props
const mapStateToProps = (state) => { return {auth: state.authReducer.auth} }

// Give this component access to the redux managed state
export default connect(mapStateToProps)(App)
