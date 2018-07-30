import React, { Component } from 'react';

class MauricioComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: "Mauricio",
            age: ""
        }
    }
    render() {
      return (
        <div>
            <p>My Name is {this.state.name}</p>
        </div>
      );
    }
  }
  
  export default MauricioComponent;