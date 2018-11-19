import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import axios from 'axios'
import Map from './Map'
import NavBar from '../NavBar'

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
  componentDidMount() {
    axios.get('/events.json').then((response) => {
      this.setState({ events: response.data.features })
    })
  }


  handleEvent = (eventId) => {
    Turbolinks.visit(`/events/${eventId}`)
  }

  render(){
    const { events } = this.state
    return(
      <div>
        <NavBar/>
        }

        <h1>THESE ARE MY EVENTS</h1>
        <Map events={events} />
        {
          events.map((event) => {
            return (
              <div key={event.id}>
                Event ID:{event.id}
                <button onClick={(e) => { this.handleEvent(event.id) } }>TAG ALONG</button>
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
