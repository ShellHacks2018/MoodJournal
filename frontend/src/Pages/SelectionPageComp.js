import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import SelectionPageView from './SelectionPageView';
import $ from 'jquery';
import { connect } from 'react-redux';


class SelectionPageComp extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     currentEmotion: "Choose a Mood",
  //     redirect: false
  //   }
  // }

  update = (e, emo)=>{
    // this.setState({currentEmotion: emo});
    this.props.updateEmotion(emo);
  }

  postEmotion = (event)=>{
    let data = {
      "date": new Date(),
      // "emotion":this.state.currentEmotion,
      "emotion":this.props.currEmotion,
      "userId": localStorage.getItem("userId"), 
    }

    let url = "http://localhost:3001/api/emotions?access_token="+localStorage.getItem("token")

    $.post(url, data).done ((response)=>{ 
      // this.setState({redirect:true});
      this.props.updateRedirect(true);
    }).fail((err)=> {console.log(err);})
  }

  render() {
    //this.state.redirect
    if(this.props.redirect) {
      this.props.updateRedirect(false);
      return <Redirect to='/calendar'/>
    }
    else{return (
        <SelectionPageView 
          update={this.update}
          //this.state.currentEmotion
          currentEmotion={this.props.currEmotion}
          postEmotion={this.postEmotion}/>
      );
      
    }
  }
}

const mapStateToProps = state => {
  return {
    currEmotion: state.emoReducer.currentEmotion,
    redirect: state.emoReducer.redirect
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateEmotion: (val) => dispatch({type: "UPDATE_EMOTION", val: val}),
    updateRedirect: (val) => dispatch({type: "UPDATE_REDIRECT", val: val})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectionPageComp);