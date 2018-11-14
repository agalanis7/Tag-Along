import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button, Label, Collapse, CardBody, Card } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class Form extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {collapse: false}

    this.state = {
      profile: {
        first_name: '',
        last_name: '',
        gender: '',
        notification: '',
        activity_id: []
      },
      activities: []
    },

  }
  toggle() {
   this.setState({ collapse: !this.state.collapse });
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
    let { profile } = this.state;
    profile.notification = event.target.value;
    this.setState({ profile });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let { profile, activities } = this.state;
    this.props.createProfile(profile)
    profile = { first_name: '', last_name: '', gender: '', notification: '', activity_id: activities, skill: skill }
    this.setState({ profile })
  }
  handleChange = (event) => {
    let { profile, activities } = this.state
    // console.log("here is the event value: ", event.target.value)
    event.preventDefault()
    profile.activity_id.push(event.target.value)
    this.setState({profile})
    activities.push(event.target.value)
    console.log(activities)
   }

  render() {
    const { profile } = this.state;
    console.log(profile)
    return (
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
                <TextField
                  label="Gender"
                  id="profile_gender"
                  value={profile.gender}
                  onChange={this.handleGenderChange}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item md={8} xs={12}>
                  <TextField
                    label="Notification type"
                    id="profile_notification"
                    value={profile.notification}
                    onChange={this.handleNotificationChange}
                    margin="normal"
                    fullWidth
                  />
                </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={ this.handleSubmit }

          >
            Create Profile
          </Button>
          {
            this.props.activities.map((activity, index) => {
              let color = "primary"
              {if (activity.id){
                color = "secondary"
              } }
              return (
                <div>
                  <Button key={index} onClick={this.handleChange} value={activity.id} key={`index`} variant="outlined" color="primary"> {activity.name}</Button>
                </div>
              )
            })
          }
        </form>
      </Paper>
    )
  }
}

export default Form;
