import React, {Component} from 'react'
// import ReactDOM from 'react-dom'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import PropTypes from 'prop-types'
// import MarkerComponent from './MarkerComponent.js'

export class MapComponent extends Component {
  constructor(props){
    super(props);
    const {lat, lng} = this.props.initialCenter;
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      currentLocation: {
        lat: lat,
        lng: lng
      }
    }
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  getCurrentPosition = () => {
    if(navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition((position)=> {
        this.setState({
          currentLocation: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
          }
        });
      })
    }
    else{
      // Browser doesn't support Geolocation
      console.log("Browser doesn't suppport");
    }  
  }

  render() {
    this.getCurrentPosition();
    return (
      <div>
        <Map google={this.props.google}
            onClick={this.onMapClicked}
            center = {this.state.currentLocation}>
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} 
                  position = {this.state.currentLocation}/>

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

MapComponent.propTypes = {
  google: PropTypes.object,
  zoom: PropTypes.number,
  initialCenter: PropTypes.object,
}

MapComponent.defaultProps = {
  zoom: 16,
  // San Francisco, by default
  initialCenter: {
    lat: 25.760100,
    lng: -80.374445
  },

}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBY-_Q11FBbKW5Z2mSsKnlZnQ1qXRS4N90"
})(MapComponent)