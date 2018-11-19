import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import axios from 'axios'
import Map from './Map'
import NavBar from './NavBar'
import Paper from '@material-ui/core/Paper'

const handleCreateEvent = () => {
  Turbolinks.visit('/events/new')
}

  const style = {
  padding: '5px',
  background: 'linear-gradient(45deg, #B2FF59 30%, #8BC34A 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  };

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
      <div style={style}>
        <Paper style={{margin: 10, padding: 10}} >
          <NavBar/>
          <h2 style={{padding: 10}} >Welcome to TagAlong</h2>

          <Map events={events} activities={this.props.activities} />
          {
            events.map((event) => {
              return (
                <div key={event.id}>
                  Title:{event.title}
                  <Button onClick={(e) => { this.handleEvent(event.id) } }>TAG ALONG</Button>
                  <hr/>
                </div>
              )
            })
          }
          <Button onClick={handleCreateEvent} color="primary"> Create New Event </Button>
        </Paper>
      </div>

    )
  }
}
export default Events
