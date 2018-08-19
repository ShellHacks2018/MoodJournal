import React from 'react';
import EmojiComponent from '../Components/EmojiComponent.js';
import PropTypes from 'prop-types';

const SelectionPageView = (props) => {
  return (
    <div className="container">
      <div className="container">
        <div className="row my-5">
          <div className="col-lg">
            <h3>Select your Mood</h3>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-sm">
            <EmojiComponent emotion="grin" onClick={(e)=>props.update(e,"grin")} />
          </div>
          <div className="col-sm">
            <EmojiComponent emotion="slightly_smiling_face" onClick={(e)=>props.update(e,"slightly_smiling_face")} />
          </div>
          <div className="col-sm">
            <EmojiComponent emotion="neutral_face" onClick={(e)=>props.update(e,"neutral_face")} />
          </div>
          <div className="col-sm">              
            <EmojiComponent emotion="slightly_frowning_face" onClick={(e)=>props.update(e,"slightly_frowning_face")}/>
          </div>
          <div className="col-sm">              
            <EmojiComponent emotion="disappointed" onClick={(e)=>props.update(e,"disappointed")}/>
          </div>
          <div className="col-sm">              
            <EmojiComponent emotion="rage" onClick={(e)=>props.update(e,"rage")}/>
          </div>
        </div>
      </div>

      <div className = "container">
        <div className="row my-5 d-flex align-item-center">
          <div className="col-lg">
            <EmojiComponent 
              emotion={props.currentEmotion}
              size = {100} />
          </div>
        </div>
        <div className="row my-5 d-flex align-item-center">
          <div className="col-lg">
            <button type="button" className="btn btn-primary" onClick={props.postEmotion}>Set Mood</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectionPageView;

SelectionPageView.propTypes = {
  update: PropTypes.func,
  currentEmotion: PropTypes.string,
  postEmotion: PropTypes.func
}
