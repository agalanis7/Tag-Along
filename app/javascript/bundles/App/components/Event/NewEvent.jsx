import React, { Component } from 'react';
import Form from './Form'
import axios from 'axios'

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
      loc: ''
    }
  }

  async componentDidMount() {
    let {data} = await axios.get('/activities.json?find=activities')
    let something = await axios.get('/events.json')
    // let locations = await axios.get('/locations.json')
    this.setState({activities: data})
    }


  fetchLocations = async (loc) => {
    let { data } = await axios.get(`/activities.json?find=${loc}`)
    console.log(data)
    this.setState({ locations: data })
  }

  handleLoc = (event) => {
    let { loc } = this.state
    loc = event.target.value
    this.setState({ loc })
    console.log(loc)
  }

    createEvent = (event_new) => {
      // console.log(event_new)
      // console.log("this is event?");
      axios.post('/events.json', {
        event: {
          event_date: event_new.event_date,
          start_time: event_new.start_time,
          end_time: event_new.end_time,
          quantity: event_new.quantity,
          notification: event_new.notification
        },
        location: {
          id: this.state.loc
        }
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
            <button onClick={this.handleLoc} key={loc.id} value={loc.id}>{loc.name}, {loc.street}, {loc.city}, {loc.state}</button>
          )
        })}
      </div>
    )
  }
}
export default NewEvent
