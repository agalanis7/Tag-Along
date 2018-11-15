import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios'

export default class Map extends Component {

  constructor() {
    super()
    this.state = {
      locations: []
    }
  }
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoicm9iZXJ0b3Nhbm1hcnRpbiIsImEiOiJjam9lazBwOG0zMDZvM3ZubHo3ejc4Y3VqIn0.t0pQuI4fe18O8IuQkxwFFw'
    const mapOptions = {
      container: this.mapContainer,
      style: `mapbox://styles/mapbox/streets-v9`,
      zoom: 12,
      center: [-80.2044, 25.8028]
    }

    this.createMap(mapOptions)
}

createMap = (mapOptions) => {
  this.map = new mapboxgl.Map(mapOptions)
  const map = this.map
  map.on('load', (event) => {
    this.fetchPlaces()
  })
}


  fetchPlaces = () => {
    const map = this.map
    let {data} = axios.get(`/locations.json`).then(res => {
      this.setState({locations: res.data.features})
      console.log(this.state.locations)
      this.state.locations.forEach((loc, i) => {
        let elm = document.createElement('div')
        elm.className = "marker"
        let marker = new mapboxgl.Marker(elm)
        .setLngLat(loc.geometry.coordinates)
        marker.addTo(map)
      })
    })
  }

  render() {
    const style = {
      width: '100%',
      height: '500px',
      backgroundColor: 'azure'
    };
    return <div style={style} ref={el => this.mapContainer = el} />;
  }

  componentWillUnmount() {
    this.map.remove();
  }
}
