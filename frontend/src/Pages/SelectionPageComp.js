import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import SelectionPageView from './SelectionPageView';
import $ from 'jquery';


export default class SelectionPageComp extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentEmotion: "Choose a Mood",
      redirect: false
    }
  }

  update = (e, emo)=>{
    this.setState({currentEmotion: emo});
  }

  postEmotion = (event)=>{
    let data = {
      "date": new Date(),
      "emotion":this.state.currentEmotion,
      "userId": localStorage.getItem("userId"), 
    }

    let url = "http://localhost:3001/api/emotions?access_token="+localStorage.getItem("token")

    $.post(url, data).done ((response)=>{ 
      this.setState({redirect:true});
    }).fail((err)=> {console.log(err);})
  }

  render() {
    if(this.state.redirect) {return <Redirect to='/calendar'/>}
    else{return (
        <SelectionPageView 
          update={this.update}
          currentEmotion={this.state.currentEmotion}
          postEmotion={this.postEmotion}/>
      );
      
    }
  }
}
