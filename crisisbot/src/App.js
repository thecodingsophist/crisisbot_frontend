import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { InfoWindow, Marker } from 'google-maps-react';

// const result = dotenv.config()

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
    state = {
     showingInfoWindow: false,  //Hides or the shows the infoWindow
     activeMarker: {},          //Shows the active marker upon click
     selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
   };
  render() {
      console.log(process.env.BLABLA);
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDyPU_ynD1XAFWcSSD44NEh3NFyqt8ketg'
})(MapContainer);
