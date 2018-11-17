import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import ReactDOMServer from 'react-dom/server'
import axios from 'axios'
import Popup from './Popup.jsx'

 class Map extends Component {
   constructor() {
     super()
     this.state = {
       locs: []
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
       this.fetchLocations()

          map.addSource('basketball', {
            type: 'geojson',
            data: `/locations/basketball`
          });
          map.addLayer({
            'id': 'baskeball',
            'type': 'circle',
            'source': 'basketball',
            'layout': {
              'visibility': 'visible'
            }
          })

          map.addSource('tennis', {
            type: 'geojson',
            data: `/locations/tennis`
          });
          map.addLayer({
            'id': 'tennis',
            'type': 'circle',
            'source': 'tennis',
            'layout': {
              'visibility': 'visible'
            }
          })

          map.addSource('baseball', {
            type: 'geojson',
            data: `/locations/baseball`
          });
          map.addLayer({
            'id': 'baseball',
            'type': 'circle',
            'source': 'baseball',
            'layout': {
              'visibility': 'visible'
            }
          })

          map.addSource('biking', {
            type: 'geojson',
            data: `/locations/biking`
          });
          map.addLayer({
            'id': 'biking',
            'type': 'circle',
            'source': 'biking',
            'layout': {
              'visibility': 'visible'
            }
          })

          map.addSource('golf', {
            type: 'geojson',
            data: `/locations/golf`
          });
          map.addLayer({
            'id': 'golf',
            'type': 'circle',
            'source': 'golf',
            'layout': {
              'visibility': 'visible'
        }})
    })}


   fetchLocations = () => {
     const map = this.map;
     let newMarkers = this.props.locs
     newMarkers.forEach((loc, i) => {
       let elm = document.createElement('div')
       elm.className = "markers"
       let popup = new mapboxgl.Popup({ offset: 25})
       .setHTML(ReactDOMServer.renderToStaticMarkup(
         <Popup loc={loc}></Popup>
       ))
       popup.on('open', (e) => {
         document.getElementById(`${loc.id}`).addEventListener('click', function() {
           Turbolinks.visit(`/events/${i + 1}`)
         })
       })
       // elm.className = `${loc.location_type.toLowerCase()}`
       let marker = new mapboxgl.Marker(elm)
       .setLngLat([loc.longitude, loc.latitude])
       .setPopup(popup)
      marker.addTo(map)
     })
   }


   componentDidUpdate() {
     console.log(this.props.locs)
   }

   componentWillUnmount() {
     this.map.remove();
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
       </div>
     )
   }
 }





export default Map
