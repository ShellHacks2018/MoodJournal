import React, {Component} from 'react';
import Calendar from "react-big-calendar";
import moment from "moment";
import EmojiComponent from "../Components/EmojiComponent.js";
import $ from 'jquery';

import "react-big-calendar/lib/css/react-big-calendar.css";

Calendar.setLocalizer(Calendar.momentLocalizer(moment));

const data = [
  {
    start: "2018-08-01T15:36:27.906Z",
    end: "2018-08-01T15:36:27.906Z", 
    title: <EmojiComponent emotion="VerySad"/>
  },
  // {
  //   start: "2018-08-03T15:36:27.906Z",
  //   end: "2018-08-03T15:36:27.906Z", 
  //   title: <EmojiComponent emotion="VeryHappy"/>
  // },
  // {
  //   start: new Date(),
  //   end: new Date(),
  //   title: <EmojiComponent emotion="VerySad"/>
  // },
]


export default class CalendarPageComp extends Component {
  state = {
      events: data
  };

  

  // componentDidMount(){
  //   console.log("DidMount");
  //   // let filter = {"where": {"userId": localStorage.getItem("userId")}};
  //   // let url = "http://localhost:3001/api/emotions?filter="+ JSON.stringify(filter);


  //   let filter = {"where": {"userId": localStorage.getItem("userId")}};
  //   console.log(JSON.stringify(filter))
    
  //   let url = "http://localhost:3001/api/emotions"
    
  //   $.get(url ).done( (response)=>{
  //     console.log("getRespond");
  //     console.log(response);
  //   }).fail((err)=>{console.log(err);})

  // }

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