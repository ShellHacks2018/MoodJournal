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
            <div class="col-sm">
              <EmojiComponent emotion="Happy" onClick={(e)=>this.update(e,"Happy")} />
            </div>
            <div className="col-sm">
              <EmojiComponent emotion="Sad" onClick={(e)=>this.update(e,"Sad")} />
            </div>
            <div className="col-sm">
              <EmojiComponent emotion="Angry" onClick={(e)=>this.update(e,"Angry")} />
            </div>
            <div className="col-sm">              
              <EmojiComponent emotion="Neutral" onClick={(e)=>this.update(e,"Neutral")}/>
            </div>
          </div>
        </div>

        <div className = "container">
          <div className="row my-5 d-flex align-item-center">
            <div class="col-lg">
              <EmojiComponent 
                emotion={this.state.currentEmotion} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
