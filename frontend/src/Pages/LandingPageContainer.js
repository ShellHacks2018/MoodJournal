import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import LandingForm from '../Components/LandingForm';

import $ from 'jquery'; 


export default class LandingPageContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {email: '',
                  password: '',
                  redirect: false};
  }

  handleEmailFunction = (event) => {
    this.setState({email: event.target.value});
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  handleSubmit = (event) => {
    let data = {
      "username":this.state.email,
      "email": this.state.email,
      "password": this.state.password
    };

    let url = "http://localhost:3001/api/Users";

    // Our front end, hitting the server
    $.post(url, data).done( (response) => {
    }).fail((err) => {console.log(err); })
  }

  loginHandler = (event) => {
    let data = {
      "username":this.state.email,
      "password": this.state.password
    };

    let url = "http://localhost:3001/api/Users/login";

    // Our front end, hitting the server
    $.post(url, data).done( (response) => {
      localStorage.setItem("token", response.id);
      localStorage.setItem("user", this.state.email);
      localStorage.setItem("userId", response.userId);
      // localStorage.setItem("auth", true);

      this.props.updateAuth(true);
      this.setState({redirect: true});
    })
  }

  render(){
    if (this.state.redirect) { return <Redirect to='/selection' /> }
    else{ return(
        <LandingForm email={this.state.email} 
                     password={this.state.password} 
                     handleEmailChange={this.handleEmailFunction}
                     handlePasswordChange={this.handlePasswordChange}
                     handleSubmit={this.handleSubmit}
                     loginHandler={this.loginHandler}/>
      );
    }
  }
} 

