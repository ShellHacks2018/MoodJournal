import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class NavbarComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false
    }
  }

  logoff = () => {
    localStorage.clear();
    this.props.authUpdate(false);
    this.setState({redirect: true});
  }

  render() {
    if(this.props.currentAuth){
      return(
      <div>            
        <nav className="navbar navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">MoodJournal</Link>              
          <ul className="nav justify-content-center">
            <li className="nav-item">                  
              <Link className="nav-link active" to="/calendar">Calendar</Link>
            </li>
            <li className="nav-item">                
              <Link className="nav-link" to="/selection">Mood Selection</Link>
            </li>    
            <li className="nav-item">                
              <button className="btn btn-danger" onClick={this.logoff}>Logoff</button>
            </li>             
          </ul>                           
        </nav>
      </div>);
    }
    else{
      return (
        <div>            
          <nav className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">MoodJournal</Link>                             
          </nav>
          <Redirect to='/' />
        </div>
        
      );
    }
  
  }
}



