import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import LandingForm from '../Components/LandingForm';
import {connect} from 'react-redux';
import $ from 'jquery'; 
import AuthAction from '../Store/AuthAction';


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

    this.props.authFn.login(data);
  }

  render(){
    console.log(this.props.auth)
    if (this.props.auth) { return <Redirect to='/selection' /> }
    else{ 
      return(
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

const mapStateToProps = (state) => { return {
    auth: state.authReducer.auth,
    email: state.lpr.email,
    password: state.lpr.password
  }; 
};

const mapDispatchToProps = (dispatch) => { 
  return {
    updateEmail: (val) => { dispatch({type: 'GET_EMAIL', val: val}) },
    updatePassword: (val) => { dispatch({type: 'GET_PASSWORD', val: val}) },
    authFn: AuthAction(dispatch)
  }; 
};

// Give this component access to the redux managed state
export default connect(mapStateToProps, mapDispatchToProps)(LandingPageContainer);