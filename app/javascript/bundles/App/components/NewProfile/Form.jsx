import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
// import { Button, Label, Collapse, CardBody, Card } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import TagDropdown from './TagDropdown.js'
import Button from '@material-ui/core/Button'
import Notification from './Notification'


class Form extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      profile: {
        first_name: '',
        last_name: '',
        gender: '',
        notification: '',
        image: '',
        activity_id: []
      },
      activities: [],
      name: '',
      image: ''
    }
  }

  handleFirstNameChange = (event) => {
    let { profile } = this.state;
    profile.first_name = event.target.value;
    this.setState({ profile });
  }

  handleLastNameChange = (event) => {
    let { profile } = this.state;
    profile.last_name = event.target.value;
    this.setState({ profile });
  }

  handleGenderChange = (event) => {
    let { profile } = this.state;
    profile.gender = event.target.value;
    this.setState({ profile });
  }

  handleNotificationChange = (event) => {
    console.log(`Inside handleNotificationChange event: ${event}`)
    let { profile } = this.state;
    profile.notification = event
    this.setState({ profile });
  }

  handleImageChange = event => {
    let { profile } = this.state
    const image = event.target.files[0]
    profile.image = image
    this.setState({ profile })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let { profile, activities, image } = this.state;
    const formData = new FormData()
    formData.append('profile[first_name]', profile.first_name)
    formData.append('profile[last_name]', profile.last_name)
    formData.append('profile[gender]', profile.gender)
    formData.append('profile[notification]', profile.notification)
    formData.append('profile[image]', profile.image)
    formData.append('profile[activity_id]', profile.activity_id)
    this.props.createProfile(formData)
    // AW it is not a good idea to set state more than once in a function vv
    // profile = { first_name: '', last_name: '', gender: '', notification: '', activity_id: [] }
    // this.setState({ profile })
    // Turbolinks.visit('/events')
  }

  handleChange = (activityId) => {
    let { profile, activities } = this.state
    if(!profile.activity_id.includes(activityId)){
      profile.activity_id.push(activityId)
    }else{
      profile.activity_id = profile.activity_id.filter(id => id !== activityId)
    }
    this.setState({profile})
   }

  render() {
    const { profile } = this.state;
    return (
    <div>
      <Paper style={{margin: 10, padding: 10}}>
        <form
          style={{display: 'flex', flexWrap: 'wrap'}}
          noValidate
          onSubmit={ this.handleSubmit }
        >
          <Grid container spacing={40}>
            <Grid item md={8} xs={12}>
              <TextField
                label="First Name"
                id="profile_first_name"
                value={profile.first_name}
                onChange={this.handleFirstNameChange}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                label="Last Name"
                id="profile_last_name"
                value={profile.last_name}
                onChange={this.handleLastNameChange}
                margin="normal"
                fullWidth
              />
            </Grid>
              <Grid item md={8} xs={12}>
              <TagDropdown handleGenderChange={this.handleGenderChange}/>
              </Grid>
              <Grid item md={8} xs={12}>
                <Notification handleNotificationChange={this.handleNotificationChange} notification={this.state.notification} />
              </Grid>
              <Grid item md={8} xs={12}>
                <label htmlFor='image'>Image</label>
                <input
                  name='image'
                  type='file'
                  onChange={this.handleImageChange}
                />
                </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={ this.handleSubmit }
          >
            Create Profiles
          </Button>
          {
            this.props.activities.map((activity, index) => {
              return (
                <div key={index}>
                  <Button
                    type="button"
                    key={index} onClick={ (e) => { this.handleChange(activity.id) } }
                    value={activity.id} key={`index`}
                    variant={ this.state.profile.activity_id.includes(activity.id) ? "contained" : "outlined" }
                    color="secondary"
                  >
                    {activity.name}
                  </Button>
                </div>
              )
            })
          }
        </form>
      </Paper>
    </div>
    )
  }
}

export default Form;
