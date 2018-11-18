import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import ReactDOMServer from 'react-dom/server'
import axios from 'axios'
import Popup from './Popup.jsx'

 class Map extends Component {
   constructor() {
     super()
     this.state = {
       on: ["basketball", "baseball", "tennis", "golf", "biking", "volleyball"]
     }
   }

   async componentDidMount() {
      mapboxgl.accessToken = 'pk.eyJ1IjoiYW5keXdlaXNzMTk4MiIsImEiOiJIeHpkYVBrIn0.3N03oecxx5TaQz7YLg2HqA'

      //OPTIONS FOR BUILT IN GEOLOCATOR BUTTON
      const geolocationOptions = {
      //Tells Geocoder to use gps locating over ip locating
        enableHighAccuracy: true,
      //Sets maximum wait time
        maximumAge        : 30000,
        timeout           : 27000
      };

      //OPTIONS FOR MAPBOX COMPONENT
      const mapOptions = {
        //DEFINES CONTAINER
        container: this.mapContainer,
        style: `mapbox://styles/mapbox/streets-v9`,
        zoom: 12,
        center: [-80.2044, 25.8028]
      }

      this.createMap(mapOptions, geolocationOptions)
   }

   createMap = (mapOptions, geolocationOptions) => {
     this.map = new mapboxgl.Map(mapOptions)
     const map = this.map;

     map.addControl(
       new mapboxgl.GeolocateControl({
         positionOptions: geolocationOptions,
         trackUserLocation: true
       })
     )
     map.addControl(
       new mapboxgl.NavigationControl({
         positionOption: geolocationOptions,
         trackUserLocation: true
       })
     )

     map.on('load', (event) => {

      const icons = {
        basketball: "airfield-15",
        tennis: "alcohol-shop-15",
        baseball: "aquarium-15",
        golf: "golf-15",
        biking: "bicycle-15",
        volleyball: "bakery-15"
      }

      map.addSource(
        'events', {
                    type: 'geojson',
                    data: '/events.json'
                  }
      )
      this.props.events.forEach((event) => {
        var eventType = event.properties['event_type']
        if(!this.map.getLayer(eventType)){
          this.map.addLayer({
            id: eventType,
            type: "symbol",
            source: "events",
            layout: {
              "icon-image": icons[eventType],
              "icon-allow-overlap": true
            },
            filter: ["==", "event_type", eventType]
          })
        }
      })
    })}


   componentDidUpdate() {
     console.log(this.props.events)
   }

   componentWillUnmount() {
     this.map.remove();
  }

  toggleVisibility = (eventType) => {
    this.map.setLayoutProperty(eventType, 'visibility',
      this.state.on.includes(eventType) ? "none" : "visible"
    );
    let { on } = this.state
    if(on.includes(eventType)){
      on = on.filter(eType => eType !== eventType)
    }else{
      on.push(eventType)
    }
    this.setState({ on })
  }

   render() {
     const style = {
       width: '100%',
       height: '500px',
       backgroundColor: 'azure'
     };
     return (
       <div>
         <div id="map" style={style} ref={el => this.mapContainer = el} />
         <ul>
          <li onClick={ () => { this.toggleVisibility("basketball") } }>Basketball <span>{this.state.on.includes("basketball") ? "On" : "Off"}</span></li>
          <li onClick={ () => { this.toggleVisibility("biking") } }>Biking <span>{this.state.on.includes("biking") ? "On" : "Off"}</span></li>
          <li onClick={ () => { this.toggleVisibility("baseball") } }>Baseball <span>{this.state.on.includes("baseball") ? "On" : "Off"}</span></li>
          <li onClick={ () => { this.toggleVisibility("tennis") } }>Tennis <span>{this.state.on.includes("tennis") ? "On" : "Off"}</span></li>
          <li onClick={ () => { this.toggleVisibility("golf") } }>Golf <span>{this.state.on.includes("golf") ? "On" : "Off"}</span></li>
          <li onClick={ () => { this.toggleVisibility("volleyball") } }>Volleyball <span>{this.state.on.includes("volleyball") ? "On" : "Off"}</span></li>
         </ul>
       </div>
     )
   }
 }





export default Map
