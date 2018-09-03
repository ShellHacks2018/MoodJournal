import React, {Component} from 'react';
import GoogleMap from 'google-map-react';
import MarkerComponent from '../Components/MarkerComponent.js';

class MapPageComp extends Component{

  // static defaultProps = {
  //   center: {
  //     lat: 25.760100,
  //     lng: -80.374445
  //   },
  //   zoom: 16
  // };

  getPosition = () => {
    if(navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition((position)=> {
        this.props.center.lat = position.coords.latitude;
        this.props.center.lng = position.coords.longitude;
      })
      console.log(JSON.stringify(this.props.center));
    }
    else{
      // Browser doesn't support Geolocation
      console.log("Browser doesn't suppport");
    }
  }

  render(){
    this.getPosition();
    console.log(JSON.stringify(this.props.center));
    return(
      <div style={{ height: '100vh', width: '100%' }}>
        <h1 className="my-5">Google Map</h1>
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMap
            bootstrapURLKeys={{ key: "AIzaSyBY-_Q11FBbKW5Z2mSsKnlZnQ1qXRS4N90" }}
            // defaultCenter={this.props.center}
            center = {this.props.center}
            defaultZoom={this.props.zoom}>
            
            <MarkerComponent emotion='grin' title='Device Position'
            lat={this.props.center.lat}
            lng={this.props.center.lng}/>

            {/* {<Marker position={{lat: 25.760100,lng: -80.374445}}/>} */}
            
          </GoogleMap>
        </div>
      </div>
    );
  }
}

MapPageComp.defaultProps = {
  center: {
    lat: 25.760100,
    lng: -80.374445
  },
  zoom: 16
};

export default MapPageComp;