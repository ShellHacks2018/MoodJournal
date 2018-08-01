import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EmojiComponent from './Components/Emoji/EmojiComponent.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      a: ""
    }
    //this.update = this.update.bind(this);
  }


  update = (e,emo)=>{
      this.setState({a: String(emo)});
      console.log("Clicked!");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Mood Journal</h1>
        </header>
        
        <div className="container">
          <div className="row my-5">
            <div class="col-sm">
              <EmojiComponent emotion="Happy" onClick={(e)=>this.update(e,"Happy")} />
            </div>
            <div className="col-sm">
              <EmojiComponent emotion="sad" onClick={(e)=>this.update(e,"Sad")} />
            </div>
            <div className="col-sm">
              <EmojiComponent emotion="angry" onClick={(e)=>this.update(e,"Angry")} />
            </div>
            <div className="col-sm">              
              <EmojiComponent emotion="neutral" onClick={(e)=>this.update(e,"Neutral")}/>
            </div>
          </div>
        </div>

        <div className = "container">
          <div className="row my-5 d-flex align-item-center">
            <div class="col-lg">
              <EmojiComponent emotion={this.state.a}/>
            </div>
          </div>

        </div>



      </div>
    );
  }
}

export default App;
