import React, { Component } from 'react';
import Form from './Form'
import axios from 'axios'
import Button from '@material-ui/core/Button'

const token = document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute('content');
const headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-TOKEN':     token
      }


class NewEvent extends Component {
  constructor() {
    super()
    this.state = {
      events: [],
      locations: [],
      activities: [],
      loc: '',
      activity_id: ''
    }
  }

  async componentDidMount() {
    let {data} = await axios.get('/activities.json?find=activities')
    let something = await axios.get('/events.json?events=events')
    // let locations = await axios.get('/locations.json')
    this.setState({activities: data})
    }


  fetchLocations = async (loc, activity) => {
    let { data } = await axios.get(`/activities.json?find=${loc}`)
    console.log(data)
    this.setState({ locations: data, activity_id: activity })
  }

  handleLoc = (event) => {
    let { loc } = this.state
    loc = event.target.value
    this.setState({ loc })
    console.log(loc)
  }

  testingParticipant = () => {
    let post = axios.post(`/events/7/user_events`, {}, {headers: headers}).then((res) => {
      console.log(res)
    })
    Turbolinks.visit('/events')
  }

    createEvent = (event_new) => {
      // console.log(event_new)
      // console.log("this is event?");
      axios.post('/events.json', {
        event: {
          event_date: event_new.event_date,
          start_time: event_new.start_time,
          quantity: event_new.quantity,
          notification: event_new.notification,
          description: event_new.description
        },
        location: {
          id: this.state.loc,
          activity_id: this.state.activity_id
        },
      },
      {headers: headers})
      .then((response) => {
        // console.log("THIS IS WHAT IS GETTING SENT UP")
        // console.log(event_new)
        let { events } = this.state;
        events.push(response.data);
        this.setState({ events })
      })
}
  render(){
    const { activities, locations } = this.state
    return(
      <div>
        <Form activities={activities} locations={this.fetchLocations} createEvent={this.createEvent} />
        {locations.map((loc) => {
          return (
            <div>
              <button onClick={this.handleLoc} key={loc.id} value={loc.id}>{loc.name}, {loc.street}, {loc.city}, {loc.state}</button>
            </div>
          )
        })}
        <button onClick={this.testingParticipant}>Create me</button>
      </div>
    )
  }
}
export default NewEvent
