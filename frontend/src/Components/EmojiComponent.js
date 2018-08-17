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
        // this.emoji = "" ;
    }

  
    render() {
      // this.updateEmoji();
      return( <EmojiView        
        size={this.props.size}
        onClick={this.props.onClick}
        emoPassed = {this.state.emotion}
        /> );
      }
}

EmojiComponent.propTypes={
  emotion: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.number,
  emojiPassed: PropTypes.string
};


EmojiComponent.defaultProps = {
  size: 60
};


