import React, { Component } from 'react';
import { Emoji } from 'emoji-mart'
import PropTypes from 'prop-types'

export default class EmojiView extends Component {

  render(){
    return(
    <div>
      <button style={{width:150}} 
        type="button" className="btn bg-transparent"
        onClick={this.props.onClick}>
          <Emoji emoji={{ id: this.props.emoji, skin: 3}} size={this.props.size} native={false}/>
      </button>
    </div>);
  }
  
}

  EmojiView.PropTypes= {
    size: PropTypes.number,
    onClick: PropTypes.func,
    emoji: PropTypes.obj
    
  }
  