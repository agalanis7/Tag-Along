import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import axios from 'axios'

const handleBack = () => {
  Turbolinks.visit('/events')
}

const token = document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute('content');
const headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-TOKEN':     token
      }

class Event extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    console.log(this.props.user)
    console.log(this.props.event.id)
    console.log(this.props.activity)
    console.log(this.props.participants)
    console.log(this.props.profile)
  }

  joinEvent = () => {
    let post = axios.post(`/events/${this.props.event.id}/user_events`, {}, {headers: headers}).then((res) => {
      location.reload()
    })
  }

  componentDidUpdate() {}

  render() {
    const { user, event, activity, participants, profile } = this.props
    return (
      <div>
        <div>
          Host: {profile.first_name}, {profile.last_name}<hr/>
        </div>
        <div>
          Activity: {activity.name}<hr/>
        </div>
        <div>
          Description: {event.description}<hr/>
        </div>
        <div>
          Participants:
          {
            participants.map((participant) => {
              return (
                <div>{participant.first_name}</div>
              )
            })

          }
          <hr/>
          <Button onClick={this.joinEvent}>JOIN</Button>
          <Button onClick={handleBack}>Back</Button>
        </div>
      </div>
    )
  }
}

export default Event
