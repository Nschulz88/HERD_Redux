import React, { Component } from 'react';
import MapContainer from './MapContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{height:1000, width: 1000}}>
      <MapContainer />
      </div>
    )
  }
}

export default App;