import React, {Component} from 'react';
import GoogleMap from 'google-map-react';
import {Popover} from 'react-bootstrap';

const AnyReactComponent = ({ text }) => (
  <div>
    <Popover
    id="popover-basic"
    placement="right"
    positionLeft={200}
    positionTop={50}
    title={text}
    >
    
    </Popover>
  </div>
);

class MapPageComp extends Component{

  static defaultProps = {
    center: {
      lat: 25.760100,
      lng: -80.374445
    },
    zoom: 16
  };

  render(){
      return(
        <div style={{ height: '100vh', width: '100%' }}>
          <h1 className="my-5">Google Map</h1>
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMap
              bootstrapURLKeys={{ key: "AIzaSyBY-_Q11FBbKW5Z2mSsKnlZnQ1qXRS4N90" }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                // FIU lat and lng obtaining from Google Map
                // 25.760100, -80.374445 
                lat={25.760100}
                lng={-80.374445}

                text={'PG6-Tech Station'} />

              {/* <Marker lat={props.lat} lng={props.lng}} /> */}
              

            </GoogleMap>
          </div>
        </div>
      );
  }
}


export default MapPageComp;