import React, { Component } from 'react';
import { FaSmile, FaMeh } from '../../../node_modules/react-icons/fa';

export default class EmojiComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            emotion: ""
        }   
        this.emoji = FaMeh;    
    }

    //@todo: Add function to set icon based on passed in emotion

    render() {
      
      return(
        <div>
          <button style={{width:150}} 
            type="button" className="btn btn-primary"
            onClick={this.props.onClick}>
              {this.props.emotion} 
              <this.emoji />
          </button>
        </div>
        );
      }

}