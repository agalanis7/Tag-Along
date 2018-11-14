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
      activities: [],
      locations: [],
    }
  }

  async componentDidMount() {
    let {data: activities} = await axios.get('/activities.json')
    let something = await axios.get('/events.json')
    // let locations = await axios.get('/locations.json')
    this.setState({activities})
    }
    createEvent = (event_new) => {
      event.event_id = this.props.event.id;
      console.log(event_new)
      console.log("this is event?");
      axios.post('/events.json', {
        event_new: {
          event_date: event.event_date,
          start_time: event.start_time,
          end_time: event.end_time,
          quantity: event.quantity,
          notification: event.notification,
          completed: event.completed,
          user_id: event.user_id,
          participant_id: event.participant_id,
          loation_id: event.loation_id,
          activity_id: event.activity_id
        }
      },
      {headers: headers})
      .then((response) => {
        console.log("THIS IS WHAT IS GETTING SENT UP")
        console.log(event_new)
        let { events } = this.state;
        events.push(response.data);
        this.setState({ events })
      })
}
  render(){
    return(
      <Form />
    )
  }
}
export default NewEvent
