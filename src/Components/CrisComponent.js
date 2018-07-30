import React, { Component } from 'react';

class CrisComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: "Cristian",
            age: ""
        }
    }
    render() {
      return (
        <div className="CrisStyle">
            <p>My Name is {this.state.name}</p>
        </div>
      );
    }
  }
  
  export default CrisComponent;
  