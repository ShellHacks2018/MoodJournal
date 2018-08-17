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
            <EmojiComponent alt="Very Happy" emotion="VeryHappy" onClick={(e)=>props.update(e,"VeryHappy")} />
          </div>
          <div className="col-sm">
            <EmojiComponent alt="Happy" emotion="Happy" onClick={(e)=>props.update(e,"Happy")} />
          </div>
          <div className="col-sm">
            <EmojiComponent alt="Neutral" emotion="Neutral" onClick={(e)=>props.update(e,"Neutral")} />
          </div>
          <div className="col-sm">              
            <EmojiComponent alt="Sad" emotion="Sad" onClick={(e)=>props.update(e,"Sad")}/>
          </div>
          <div className="col-sm">              
            <EmojiComponent alt="Very Sad" emotion="VerySad" onClick={(e)=>props.update(e,"VerySad")}/>
          </div>
          <div className="col-sm">              
            <EmojiComponent alt="Angry" emotion="Angry" onClick={(e)=>props.update(e,"Angry")}/>
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
