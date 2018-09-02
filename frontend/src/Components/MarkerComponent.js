import React, {Component} from 'react';
import MarkerView from './MarkerView.js';
import PropTypes from 'prop-types';

export default class MarkerComponent extends Component{
	render(){
		return(
			<MarkerView
				emotion = {this.props.emotion}
				title = {this.props.title}/>
		);
	}
}

MarkerComponent.PropTypes = {
	emotion: PropTypes.string,
	title: PropTypes.string
}