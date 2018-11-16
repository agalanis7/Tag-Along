import React, { Component } from 'react';

class Event extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    console.log(this.props.user)
    console.log(this.props.event)
    console.log(this.props.activity)
    console.log(this.props.participants)
    console.log(this.props.profile)
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
          Participants:
          {
            participants.map((participant) => {
              return (
                <div>{participant.first_name}</div>
              )
            })

          }
          <hr/>
        </div>
      </div>
    )
  }
}

export default Event
