import React, { Component } from 'react';
//import { FaSmile, FaMeh, FaFrown,  } from '../../../node_modules/react-icons/fa';
import '../../node_modules/emoji-mart/css/emoji-mart.css'
import { Emoji } from 'emoji-mart'

export default class EmojiComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            emotion: ""
        }  
        this.emoji = "" ;
    }

    //@todo: Add function to set icon based on passed in emotion

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

EmojiComponent.defaultProps = {
  size: 60
};

const EmojiView = (props) => {
  return(<div>
    <button style={{width:150}} 
      type="button" className="btn bg-transparent"
      onClick={props.onClick}>
        <Emoji emoji={{ id: props.emoji, skin: 3}} size={props.size} native={false}/>
    </button>
  </div>);
}