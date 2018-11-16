import React, { Component } from 'react';
// import Form from './Form'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import Map from './Map'

const handleCreateEvent = () => {
  Turbolinks.visit('/events/new')
}

class Events extends Component {
  constructor() {
    super()
    this.state = {
      events: [],
      locations: []
    }
  }
  async componentDidMount() {
    let { data } = await axios.get('/events.json?events=events')
    let locs = await axios.get(`/events.json?events=locations`)
    this.setState({ events: data, locations: locs.data })
    }

  handleEvent = (eventId) => {
    Turbolinks.visit(`/events/${eventId}`)
  }

  render(){
    const { events, locations } = this.state
    return(
      <div>
        <h1>THESE ARE MY EVENTS</h1>
        <Map locs={locations} />
        {
          events.map((event) => {
            return (
              <div key={event.id}>
                Event ID:{event.id}
                <button onClick={(e) => { this.handleEvent(event.id) } }>JOIN ME</button>
                <hr/>
              </div>
            )
          })
        }
        <Button onClick={handleCreateEvent} color="primary"> Create New Event </Button>
      </div>

    )
  }
}
export default Events
