import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import APIKey from './apiKey';
import mapConfig from './mapConfig'


import './MapContainer.css';

class MapContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
    };
    this.initMap = this.initMap.bind(this);
  }

componentDidMount() {
  this.initMap()
}

initMap() {
    let map = new google.maps.Map(document.getElementById('map'), mapConfig);
  }

  render() {
    return (
      <div style={{height:500, width: 700}} id="map"></div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: APIKey,
})(MapContainer)