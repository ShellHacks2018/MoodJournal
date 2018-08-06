import React, {Component} from 'react';
import { Link} from 'react-router-dom';

export default class NavbarComponent extends Component {

    render() {
        return (
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
              </ul>                           
            </nav>
          </div>
        );
    }
}



