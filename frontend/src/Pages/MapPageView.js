import React from 'react'
import MapComponent from '../Components/MapComponent.js'

const MapPageView = (props) =>{
	return(
		<div>
			<h1 className="my-5">Google Map</h1>
			<MapComponent/>
		</div>
    )
}

export default MapPageView;