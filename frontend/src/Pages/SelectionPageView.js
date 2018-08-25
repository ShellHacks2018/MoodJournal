import React from 'react'
import EmojiComponent from '../Components/EmojiComponent.js'
import PropTypes from 'prop-types'

const Data = [
  {key: 1, emotion: 'grin'},
  {key: 2, emotion: 'slightly_smiling_face'},
  {key: 3, emotion: 'neutral_face'},
  {key: 4, emotion: 'slightly_frowning_face'},
  {key: 5, emotion: 'disappointed'},
  {key: 6, emotion: 'rage'}
]

const SelectionPageView = (props) => {
  return (
    <div className='container'>
      <div className='container'>
        <div className='row my-5'>
          <div className='col-lg'>
            <h3>Select your Mood</h3>
          </div>
        </div>

        <div className='row my-5'>
          {
            Data.map(data =>
              <div className='col-sm' key={data.key}>
                <EmojiComponent emotion={data.emotion} onClick={(e) => props.update(e, data.emotion)} />
              </div>
            )
          }
        </div>
      </div>

      <div className='container'>
        <div className='row my-5 d-flex align-item-center'>
          <div className='col-lg'>
            <EmojiComponent
              emotion={props.currentEmotion}
              size={100} />
          </div>
        </div>
        <div className='row my-5 d-flex align-item-center'>
          <div className='col-lg'>
            <button type='button' className='btn btn-primary' onClick={props.postEmotion}>Set Mood</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectionPageView

SelectionPageView.propTypes = {
  update: PropTypes.func,
  currentEmotion: PropTypes.string,
  postEmotion: PropTypes.func
}
