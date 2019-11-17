import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { InfoWindow, Marker } from 'google-maps-react';
import axios from 'axios';

// gets info from api

// map information

const mapStyles = {
  width: '100%',
  height: '100%',
  position: 'relative'
};


export class MapContainer extends Component {

    state = {
      error: null,
      isLoaded: false,
      items: []
    };

    componentDidMount() {
      axios.get(`https://cors-anywhere.herokuapp.com/https://crisis-beacon-server.herokuapp.com/beacons`).then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.data
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
    );
}

  render() {

      // api call
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (

            <Map
              google={this.props.google}
              zoom={14}
              style={mapStyles}
            >
                for (var i = 0; i < items.length; i++) {
                <Marker position={{lat: {item[i].latitude}, lng: {item[i].longitude}}} />
                }

            </Map>
          // <ul>
          //   {items.map(item => (
          //     <li key={item.username}>
          //       {item.username}: {item.name}
          //     </li>
          //   ))}
          // </ul>
        );
      }
}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDyPU_ynD1XAFWcSSD44NEh3NFyqt8ketg'
})(MapContainer);
