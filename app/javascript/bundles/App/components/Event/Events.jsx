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
    }
  }
  async componentDidMount() {
    let {data: events} = await axios.get('/events.json')
    this.setState({events})
    }


  render(){
    const { events } = this.state
    return(
      <div>
        <h1>THESE ARE MY EVENTS</h1>
        <Map />
        {
          events.map((event) => {
            return (
              <div key={event.id}>
                Event ID:{event.id}
                <button>JOIN ME</button>
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
