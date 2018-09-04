import React, { Component } from 'react'
import '../../node_modules/emoji-mart/css/emoji-mart.css'
import PropTypes from 'prop-types'
import EmojiView from './EmojiView'

export default class EmojiComponent extends Component {
  constructor(props){
      super(props);
      this.emo = ""
  }

  // Mood: very happy==grin, happy==slightly_smiling_face
  // neutral==neutral_face, sad==slightly_frowning_face,
  // very sad==disappointed, angry==rage
  updateEmoji = () => {
    // console.log("Invoked");
    if(this.props.emotion === 'Choose a Mood'){
      this.emo = 'question';
    }
    else{
      this.emo = this.props.emotion;
    }
  }

  render() {
    this.updateEmoji();
    return( <EmojiView
      // emotion = {this.props.emotion}
      size={this.props.size}
      onClick={this.props.onClick}
      emo = {this.emo}
      /> );
    }
}

EmojiComponent.propTypes={
  emotion: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.number,
};


EmojiComponent.defaultProps = {
  size: 60
};
