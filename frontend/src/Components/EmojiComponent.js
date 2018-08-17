import React, { Component } from 'react';
import '../../node_modules/emoji-mart/css/emoji-mart.css'
import PropTypes from 'prop-types'
import EmojiView from './EmojiView';

export default class EmojiComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            emotion: ""
        }  
        this.emoji = "" ;
    }

    // Mood: very happy==grin, happy==slightly_smiling_face
    // neutral==neutral_face, sad==slightly_frowning_face, 
    // very sad==disappointed, angry==rage
    updateEmoji = () => {
        console.log("Invoked");
        //this.emoji = "neutral_face";
        switch(this.props.emotion)
        {
          case "VeryHappy":
            this.emoji = "grin";
            break;
          case "Happy":
            this.emoji = "slightly_smiling_face";
            break;
          case "Neutral":
            this.emoji = "neutral_face";
            break;
          case "Sad":
            this.emoji = "slightly_frowning_face";
            break;
          case "VerySad":
            this.emoji = "disappointed";
            break;
          case "Angry":
            this.emoji = "rage";
            break;
          default:            
            this.emoji = "question";
            break;
        }
    }

    render() {
      this.updateEmoji();
      return( <EmojiView 
        emoji={this.emoji} 
        size={this.props.size}
        onClick={this.props.onClick}
        /> );
      }
}

EmojiComponent.PropTypes={
  emotion: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.number
};


EmojiComponent.defaultProps = {
  size: 60
};


