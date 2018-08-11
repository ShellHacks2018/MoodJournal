import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

import $ from 'jquery'; 


export default class LandingPageComp extends Component{
  constructor(props) {
    super(props);
    this.state = {email: '',
                  password: '',
                  redirect: false};
  }

  handleEmailChange = (event) => {
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
      localStorage.setItem("auth", true);

      this.setState({redirect: true});
    })
  }

  render(){
    if (this.state.redirect) { return <Redirect to='/calendar' /> }
    else{ return(
        <div className="container my-5">
          <div className="row align-self-center d-flex base justify-content-center">

            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" 
                    value={this.state.email} onChange={this.handleEmailChange} 
                    aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" 
                    value={this.state.password} onChange={this.handlePasswordChange} 
                    placeholder="Password"/>
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">Register</button>
              
            </form>

            <button className="btn btn-primary" onClick={this.loginHandler}>Login</button>

          </div>
        </div>
      );
    }
  }
}