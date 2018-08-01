import React, { Component } from 'react';

export default class EmojiComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            emotion: ""
        }       
    }

    render() {
      return(
        <div>
          <button style={{width:150}} 
            type="button" className="btn btn-primary"
            onClick={this.props.onClick}>
              {this.props.emotion}
          </button>
        </div>
        );
      }

}