import React, { Component } from 'react';

class AmyComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: "Amy",
            age: ""
        }
    }
    render() {
      return (
        <div >
            <p>My Name is {this.state.name}</p>
        </div>
      );
    }
  }
  
  export default AmyComponent;