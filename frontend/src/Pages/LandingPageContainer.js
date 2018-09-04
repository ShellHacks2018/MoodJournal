import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import LandingForm from '../Components/LandingForm';
import {connect} from 'react-redux';
import $ from 'jquery'; 


class LandingPageContainer extends Component{

  handleEmailFunction = (event) => {
    this.props.updateEmail(event.target.value);
  }

  handlePasswordChange = (event) => {
    this.props.updatePassword(event.target.value);
  }

  handleSubmit = () => {
    let data = {
      "username":this.props.email,
      "email": this.props.email,
      "password": this.props.password
    };

    let url = "http://localhost:3001/api/Users";

    // Our front end, hitting the server
    $.post(url, data).done( (response) => {
    }).fail((err) => {console.log(err); })
  }

  loginHandler = () => {
    let data = {
      "username":this.props.email,
      "password": this.props.password
    };

    let url = "http://localhost:3001/api/Users/login";

    // Our front end, hitting the server
    $.post(url, data).done( (response) => {
      localStorage.setItem("token", response.id);
      localStorage.setItem("user", this.props.email);
      localStorage.setItem("userId", response.userId);
      // localStorage.setItem("auth", true);

      this.props.updateAuth(true);
      // this.setState({redirect: true});
    })
  }

  render(){
    if (this.props.auth) { return <Redirect to='/selection' /> }
    else{ return(
        <LandingForm email={this.props.email} 
                     password={this.props.password} 
                     handleEmailChange={this.handleEmailFunction}
                     handlePasswordChange={this.handlePasswordChange}
                     handleSubmit={this.handleSubmit}
                     loginHandler={this.loginHandler}/>
      );
    }
  }
} 

// Tell redux what part of state you want
// made available inside this component via this.props
const mapStateToProps = (state) => { return {
    auth: state.authReducer.auth,
    email: state.lpr.email,
    password: state.lpr.password
  }; 
};

// Setup dispatching capabilities for this component
// so it may execute actions that will update state. 
// Available in the component via this.props
const mapDispatchToProps = (dispatch) => { 
  return {
    updateEmail: (val) => { dispatch({type: 'GET_EMAIL', val: val}) },
    updatePassword: (val) => { dispatch({type: 'GET_PASSWORD', val: val}) }
  }; 
};

// Give this component access to the redux managed state
export default connect(mapStateToProps, mapDispatchToProps)(LandingPageContainer);