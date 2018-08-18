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

    // componentDidMount() {
    //   this.setState({emotion: this.props.emotion});
    // }
  
    render() {
      
      return( <EmojiView        
        emotion = {this.props.emotion}
        size={this.props.size}
        onClick={this.props.onClick}
        // forDisplay = {this.props.fordisplay}
        // emoPassed = {this.state.emotion}
        /> );
      }
}

EmojiComponent.propTypes={
  emotion: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.number,
  emojiPassed: PropTypes.string,
  fordisplay: PropTypes.bool
};


EmojiComponent.defaultProps = {
  size: 60
};


