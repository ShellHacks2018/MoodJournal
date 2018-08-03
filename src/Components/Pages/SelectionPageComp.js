import React, { Component } from 'react';
import EmojiComponent from '../Emoji/EmojiComponent.js';


export default class SelectionPageComp extends Component {

  constructor(props){
    super(props);
    this.state ={
      currentEmotion: "Choose a Mood"
    }
  }

  update = (e, emo)=>{
      this.setState({currentEmotion: emo});
  }

  render() {
    return (
      <div className="container">
        <div className="container">
          <div className="row my-5">
            <div className="col-lg">
              <h3>Select your Mood</h3>
            </div>
          </div>
          <div className="row my-5">
            <div class="col-sm">
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
            <div class="col-lg">
              <EmojiComponent 
                emotion={this.state.currentEmotion}
                size = {100} />
            </div>
          </div>
          <div className="row my-5 d-flex align-item-center">
            <div class="col-lg">
              <button type="button" class="btn btn-primary">Set Mood</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
