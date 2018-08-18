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
      console.log("Invoked");
      if(this.props.emotion === ""){
        this.emo = "question";
      }
      // else if(this.props.forDisplay)
      // {
      //   this.emo = this.props.emoPassed;
      // }
      else{
        this.emo = this.props.emotion;
        // switch(this.props.emoPassed){
        //   case "VeryHappy":
        //     this.emo = "grin";
        //     break;
        //   case "Happy":
        //     this.emo = "slightly_smiling_face";
        //     break;
        //   case "Neutral":
        //     this.emo = "neutral_face";
        //     break;
        //   case "Sad":
        //     this.emo = "slightly_frowning_face";
        //     break;
        //   case "VerySad":
        //     this.emo= "disappointed";
        //     break;
        //   case "Angry":
        //     this.emo = "rage";
        //     break;
        //   default:            
        //     this.emo= "question";
        //     break;
        // }
    }
  }
      

  render(){
    this.updateEmoji();
    // TODO: will do some logic to distinguish between 
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
    emoPassed: PropTypes.string,
    forDisplay: PropTypes.bool
  }
  