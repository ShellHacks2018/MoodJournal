import React, { Component } from 'react';

export default class EmojiComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            emotion: ""
            

        }
        //this.updateEmotion=this.updateEmotion.bind(this);
        
    }

    componentDidMount(){
        this.setState({emotion:this.props.emotion});
    }
       
    
    render() {
        return(
            <div>
                <button style={{width:150}} type="button" className="btn btn-primary" onClick={this.props.update(this.state.emotion)}>{this.state.emotion}</button>
            </div>
        );
    }

}