import React, { Component } from 'react';
import axios from 'axios'


class Profile extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    console.log(this.props.user)
    console.log(this.props.events)
    console.log(this.props.activities)
    console.log(this.props.profile)
  }
  render() {
    return (
      <div>HELLO WORLD</div>
    )
  }
}

export default Profile
