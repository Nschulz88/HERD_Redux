const mapConfig = Object.assign({}, {
  center: {lat: 49.2827291, lng: -123.12073750000002},
  zoom: 12,
  mapTypeId: 'roadmap', // could also be set to: Terrain, satellite, hybrid
  styles:[
    {
      featureType: "poi",
      stylers: [
        {hue: "#00FF6A"},
        {visibility: "on"},
        {saturation: 0},
        {lightness: 0},
        {gamma: 0}
      ]
    },
    {
      featureType: "landscape",
      stylers: [
        {hue: "#FFBB00"},
        {saturation: 23.400000000000006},
        {lightness: 37.599999999999994},
        {gamma: 1}
      ]
    },
    {
      "featureType": "road.arterial",
      "stylers": [
        {"hue": "#FF0300"},
        {"saturation": -100},
        {"lightness": 52},
        {"gamma": 1}
      ]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {visibility: 'on'},
        {color: '#cec6ff'}
      ]
    },
    {
      featureType: 'poi.business',
      stylers: [
        {visibility: 'off'}
      ]
    },
  ]
});

export default mapConfig;