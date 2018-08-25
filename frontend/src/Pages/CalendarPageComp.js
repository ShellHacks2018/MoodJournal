import React, {Component} from 'react'
import EmojiComponent from '../Components/EmojiComponent.js'
import $ from 'jquery'
import CalendarPageView from './CalendarPageView.js'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class CalendarPageComp extends Component {
  // state = {
  //     events: []
  // };

  componentDidMount () {
    let filter = {'where': {'userId': localStorage.getItem('userId')}}
    let url = 'http://localhost:3001/api/emotions?filter=' + JSON.stringify(filter)

    $.get(url).done((res) => {
      let data = []
      for (let i = 0; i < res.length; i++) {
        data.push({
          start: res[i].date,
          end: res[i].date,
          title: <EmojiComponent emotion={res[i].emotion} />
        })
      }
      // this.setState({events: data});
      this.props.updateEmotion(data)
    }).fail((err) => { console.log(err) })
  }

  render () {
    console.log('String event: ' + this.props.events)
    return (
      <CalendarPageView
        events={this.props.events}
        event_height='80vh' />
    )
  }
}

CalendarPageView.propTypes = {
  update: PropTypes.func,
  currentEmotion: PropTypes.string,
  postEmotion: PropTypes.func
}

// Tell redux what part of state you want
// made available inside this component via this.props
const mapStateToProps = (state) => { return {events: state.getEmo.events} }

// Setup dispatching capabilities for this component
// so it may execute actions that will update state.
// Available in the component via this.props
const mapDispatchToProps = (dispatch) => {
  return {
    updateEmotion: (val) => { dispatch({type: 'GET_EMOTION', val: val}) }
  }
}

// Give this component access to the redux managed state
export default connect(mapStateToProps, mapDispatchToProps)(CalendarPageComp)
