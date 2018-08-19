import React from 'react';
import { Emoji } from 'emoji-mart'
import PropTypes from 'prop-types'

const EmojiView =(props) => {  
  return(
    <div>
      <button style={{width:150}} 
        type="button" className="btn bg-transparent"
        onClick={props.onClick}>
          <Emoji emoji={{ id: props.emo, skin: 3}} size={props.size}/>
      </button>
    </div>);    
}

EmojiView.propTypes= {
  size: PropTypes.number,
  onClick: PropTypes.func,
  emo: PropTypes.string
}

export default EmojiView;
  