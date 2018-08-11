import React, {Component} from 'react';
import Calendar from "react-big-calendar";
import moment from "moment";
import EmojiComponent from "../Components/EmojiComponent.js";

import "react-big-calendar/lib/css/react-big-calendar.css";

Calendar.setLocalizer(Calendar.momentLocalizer(moment));

const data = [
  {
    start: "2018-08-01T15:36:27.906Z",
    end: "2018-08-01T15:36:27.906Z", 
    title: <EmojiComponent emotion="VerySad"/>
  },
  {
    start: "2018-08-03T15:36:27.906Z",
    end: "2018-08-03T15:36:27.906Z", 
    title: <EmojiComponent emotion="VeryHappy"/>
  },
  {
    start: new Date(),
    end: new Date(),
    title: <EmojiComponent emotion="VerySad"/>
  },
]


export default class CalendarPageComp extends Component {
  state = {
      events: data
  };

  render() {
      return (
        <div className="my-5 container">
          <div className="row justify-content-center">
            <div className="col-lg align-center" align="center">
            <Calendar 
              defaultDate={new Date()}
              defaultView="month"
              events={this.state.events}
              style={{ height: "80vh" }}/>
            </div>
          </div>
        </div>  
      );
  }

}