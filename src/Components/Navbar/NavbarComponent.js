import React, {Component} from 'react';
import CalendarPageComp from '../Pages/CalendarPageComp.js';
import SelectionPageComp from '../Pages/SelectionPageComp.js';
import {Link,Route} from 'react-router-dom';


export default class NavbarComponent extends Component {

    render() {
        return (
          <div>            
            <nav class="navbar navbar-dark bg-dark">
              <Link class="navbar-brand" to="/calendar">MoodJournal</Link>              
              <ul class="nav justify-content-center">
                <li class="nav-item">                  
                  <Link class="nav-link active" to="/calendar">Calendar</Link>
                </li>
                <li class="nav-item">                
                  <Link class="nav-link" to="/selection">Mood Selection</Link>
                </li>                
              </ul>                           
            </nav>
            <div>
              <Route path="/calendar" component={CalendarPageComp}/>
              <Route path="/selection" component={SelectionPageComp}/>
            </div> 
          </div>
        );
    }
}



