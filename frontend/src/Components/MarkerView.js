import React from 'react';
import PropTypes from 'prop-types';
import EmojiComponent from './EmojiComponent.js';

const MarkerView = (props) => {
    return (
			<div>
				<button type='button'					
					className='btn bg-transparent'
					onClick={props.onClick} 
					data-toggle='tooltip'
					data-placement='right'
					title ={props.title} >
					<EmojiComponent emotion={props.emotion}/>
				</button>
			</div>
    )
}

MarkerView.PropTypes = {
	emotion: PropTypes.string,
	title: PropTypes.string
}

export default MarkerView;