import React, {Component} from 'react';
import $ from 'jquery'; 


export default class LandingPageComp extends Component{
  constructor(props) {
    super(props);
    this.state = {email: '',
                  password: ''};
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
    
    $.post(url, data).done( (response) => {
      console.log(response);
    })
  }

  render(){
    return(
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
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

        </div>
      </div>
    );
  }
}