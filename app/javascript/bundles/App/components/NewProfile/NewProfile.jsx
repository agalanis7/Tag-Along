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

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      profiles: [],
      activities: [],
    }
  }
  async componentDidMount() {
    let {data: activities} = await axios.get('/activities.json')
    let something = await axios.get('/profiles.json')
    this.setState({activities})
    }

  createProfile = (profile) => {
    profile.user_id = this.props.user.id;
    console.log(profile)
    console.log("this is profile?");
    axios.post('/profiles.json', {
      profile: {
        first_name: profile.first_name,
        last_name: profile.last_name,
        gender: profile.gender,
        phone_number: profile.phone_number,
        notification: profile.notification,
        user_id: profile.user_id,

      },
      user_activity:{
        activity_id: profile.activity_id,
        skill: profile.skill
        }
    },
    {headers: headers})
    .then((response) => {
      console.log("THIS IS WHAT IS GETTING SENT UP")
      console.log(profile)
      let { profiles } = this.state;
      profiles.push(response.data);
      this.setState({ profiles })
    })
  }
  render() {
    return (
      <div>
        <Form createProfile={this.createProfile} activities={this.state.activities} />
      </div>
    )
  }
}

export default Profile
