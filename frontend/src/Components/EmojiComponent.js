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
  }

  render() {
    
    return( <EmojiView        
      emotion = {this.props.emotion}
      size={this.props.size}
      onClick={this.props.onClick}
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


