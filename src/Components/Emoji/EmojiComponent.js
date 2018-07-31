import React, { Component } from 'react';

export default class EmojiComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            emotion: ""
            

        }
        //this.updateEmotion=this.updateEmotion.bind(this);
        
    }

    updateEmotion = (event) => {
        console.log("Clicked!");
        this.setState({emotion:"sad"});
    }
       
    
    render() {
        return(
            <div>
                <button style={{width:150}} type="button" className="btn btn-primary" onClick={this.updateEmotion}>{this.props.emotion}</button>
            </div>
        );
    }

}