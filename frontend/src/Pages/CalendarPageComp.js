import React, {Component} from 'react';
import Calendar from "react-big-calendar";
import moment from "moment";
import EmojiComponent from "../Components/EmojiComponent.js";
import $ from 'jquery';

import "react-big-calendar/lib/css/react-big-calendar.css";

Calendar.setLocalizer(Calendar.momentLocalizer(moment));


export default class CalendarPageComp extends Component {
  state = {
      events: []
  };

  componentDidMount(){
    let filter = {"where": {"userId": localStorage.getItem("userId")}};
    let url = "http://localhost:3001/api/emotions?filter=" + JSON.stringify(filter);
    
    $.get(url).done( (res)=>{
      let data = [];
      for( let i=0; i < res.length; i++){
        data.push({
            start: res[i].date,
            end: res[i].date,
            title: <EmojiComponent emotion={res[i].emotion} />
          });
        }
      this.setState({events: data});
      }).fail((err)=>{console.log(err);})
  }

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