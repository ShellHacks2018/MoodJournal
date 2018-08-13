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
      "date": "2018-08-03T15:36:27.906Z",
      "emotion":this.state.currentEmotion,
      "userId": localStorage.getItem("userId"), 
    }

    let url = "http://localhost:3001/api/emotions?access_token="+localStorage.getItem("token")

    console.log(data);

    $.post(url, data).done ((response)=>{ 
      console.log(response)  
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
                <EmojiComponent alt="Very Happy" emotion="VeryHappy" onClick={(e)=>this.update(e,"VeryHappy")} />
              </div>
              <div className="col-sm">
                <EmojiComponent alt="Happy" emotion="Happy" onClick={(e)=>this.update(e,"Happy")} />
              </div>
              <div className="col-sm">
                <EmojiComponent alt="Neutral" emotion="Neutral" onClick={(e)=>this.update(e,"Neutral")} />
              </div>
              <div className="col-sm">              
                <EmojiComponent alt="Sad" emotion="Sad" onClick={(e)=>this.update(e,"Sad")}/>
              </div>
              <div className="col-sm">              
                <EmojiComponent alt="Very Sad" emotion="VerySad" onClick={(e)=>this.update(e,"VerySad")}/>
              </div>
              <div className="col-sm">              
                <EmojiComponent alt="Angry" emotion="Angry" onClick={(e)=>this.update(e,"Angry")}/>
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
