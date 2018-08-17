import React, {Component} from 'react';
import EmojiComponent from "../Components/EmojiComponent.js";
import $ from 'jquery';
import CalendarPageView from './CalendarPageView.js';
import PropTypes from 'prop-types';


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
    return ( <CalendarPageView 
              events={this.state.events} 
              event_height="80vh"/> );
  }
}

CalendarPageView.propTypes = {
  update: PropTypes.func,
  currentEmotion: PropTypes.string,
  postEmotion: PropTypes.func
}