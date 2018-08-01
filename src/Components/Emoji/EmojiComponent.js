import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

export default class EmojiComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            emotion: ""
        }       
    }

    // componentDidMount(){
    //     this.setState({emotion:this.props.emotion});
    // }

    // buttonIsClick = (e) => {
    //     // var DisplayBttn = ReactDOM.render(<EmojiComponent/>,document.getElementById("displayBttn"));
    //     e.target 
    //     var DisplayBttn = document.getElementById("displayBttn");
    //     DisplayBttn.state.emotion = this.props.emotion;

    // }
       
    
    render() {
        return(
            <div>
                <button style={{width:150}} type="button" className="btn btn-primary"
                        onClick={this.props.onClick}>
                            {this.props.emotion}
                </button>
            </div>
        );
    }

}