import React, { Component } from 'react';
import { Emoji } from 'emoji-mart'
import PropTypes from 'prop-types'

export default class EmojiView extends Component {
  constructor(props){
    super(props);
    this.emo = "";
  }
  
  // Mood: very happy==grin, happy==slightly_smiling_face
  // neutral==neutral_face, sad==slightly_frowning_face, 
  // very sad==disappointed, angry==rage
  updateEmoji = () => {
    // console.log("Invoked");
    if(this.props.emotion === "Choose a Mood"){
      this.emo = "question";
    }
    else{
      this.emo = this.props.emotion;       
    }
  }
      
  render(){
    this.updateEmoji();
    return(
      <div>
        <button style={{width:150}} 
          type="button" className="btn bg-transparent"
          onClick={this.props.onClick}>
            <Emoji emoji={{ id: this.emo, skin: 3}} size={this.props.size}/>
        </button>
      </div>);   
  }
  
}

EmojiView.propTypes= {
  size: PropTypes.number,
  onClick: PropTypes.func,
}
  