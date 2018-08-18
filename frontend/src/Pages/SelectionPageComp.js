import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import EmojiComponent from '../Components/EmojiComponent.js';
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
        <div className="container">
          <div className="container">
            <div className="row my-5">
              <div className="col-lg">
                <h3>Select your Mood</h3>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-sm">
                <EmojiComponent emotion="grin" onClick={(e)=>this.update(e,"grin")} />
              </div>
              <div className="col-sm">
                <EmojiComponent emotion="slightly_smiling_face" onClick={(e)=>this.update(e,"slightly_smiling_face")} />
              </div>
              <div className="col-sm">
                <EmojiComponent emotion="neutral_face" onClick={(e)=>this.update(e,"neutral_face")} />
              </div>
              <div className="col-sm">              
                <EmojiComponent emotion="slightly_frowning_face" onClick={(e)=>this.update(e,"slightly_frowning_face")}/>
              </div>
              <div className="col-sm">              
                <EmojiComponent emotion="disappointed" onClick={(e)=>this.update(e,"disappointed")}/>
              </div>
              <div className="col-sm">              
                <EmojiComponent emotion="rage" onClick={(e)=>this.update(e,"rage")}/>
              </div>
            </div>
          </div>
  
          <div className = "container">
            <div className="row my-5 d-flex align-item-center">
              <div className="col-lg">
                <EmojiComponent 
                  emotion={this.state.currentEmotion}              
                  size = {100} />
              </div>
            </div>
            <div className="row my-5 d-flex align-item-center">
              <div className="col-lg">
                <button type="button" className="btn btn-primary" onClick={this.postEmotion}>Set Mood</button>
              </div>
            </div>
          </div>
        </div>
      );
      
    }
    
  }
}
