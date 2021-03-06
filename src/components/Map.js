import React, { Component } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

export default class Map extends Component {
  render() {
    const mapContainerStyle = {
      height: '400px',
      width: '100%',
    }
    const center = {
      lat: 50.451,
      lng: -5.032,
    }
    const controlOptions = {
      zoomControl: true,
      mapTypeControl: true,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: true,
    }

    const markerPosition = {
      lat: 50.485,
      lng: -5.03,
    }

    return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey={process.env.GATSBY_MAPS_KEY}
        preventGoogleFontsLoading
      >
        <GoogleMap
          id="wedding-location"
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={11}
          options={controlOptions}
        >
          <Marker
            position={markerPosition}
            icon={'//maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png'}
          />
        </GoogleMap>
      </LoadScript>
    )
  }
}
