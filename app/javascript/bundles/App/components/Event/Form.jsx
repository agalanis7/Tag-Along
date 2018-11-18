import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class Form extends Component {
  state = {
    event_new: {
      event_date: '',
      start_time: '',
      quantity: '',
      notification: '',
      description: '',
      title: '',
      activity_id: ''

    },
    activities: this.props.activities,
    labelWidth: 0,
  }

  handleDateChange = (event) => {
    let { event_new } = this.state;
    event_new.event_date = event.target.value;
    this.setState({ event_new});
  }

  handleStartTimeChange = (event) => {
    let { event_new } = this.state;
    event_new.start_time = event.target.value;
    this.setState({ event_new});
  }

  handleTitleChange = (event) => {
    let { event_new } = this.state;
    event_new.title = event.target.value;
    this.setState({ event_new });
  }

  handleDescriptionChange = (event) => {
    let { event_new } = this.state;
    event_new.description = event.target.value;
    this.setState({ event_new });
  }
  handleQuantityChange = (event) => {
    let { event_new } = this.state;
    event_new.quantity = event.target.value;
    this.setState({ event_new});
  }
  handleNotificationChange = (event) => {
    let { event_new } = this.state;
    event_new.notification = event.target.value;
    this.setState({ event_new});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let { event_new } = this.state;
    console.log(event_new)
    console.log("this is getting sent")
    this.props.createEvent(event_new)
    event_new = { event_date: '',
    start_time: '',
    end_time: '',
    quantity: '',
    notification: '' }
    this.setState({ event_new })
  }


componentDidUpdate() {
}

handleLocation = (location, activity ) => {
  let { event_new } = this.state
  if ( event_new.activity_id != activity) {
    event_new.activity_id = activity
    this.setState({ event_new })
    let loc = location.toLowerCase()
    this.props.locations(loc, activity)

  }
}


  render() {
    const { event_new, activities } = this.state;
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
                label="Title"
                id="event_title"
                value={event.event_title}
                onChange={this.handleTitleChange}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item md={8} xs={12}>
              <TextField
                label="Date"
                id="event_date"
                value={event.event_date}
                onChange={this.handleDateChange}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                label="Satrt Time"
                id="event_start_time"
                value={event.start_time}
                onChange={this.handleStartTimeChange}
                margin="normal"
                fullWidth
              />
            </Grid>
              <Grid item md={8} xs={12}>
                  <TextField
                    label="Quantity of people"
                    id="event_quantity"
                    value={event.quantity}
                    onChange={this.handleQuantityChange}
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item md={8} xs={12}>
                  <TextField
                    label="Description"
                    id="event_end_time"
                    value={event.description}
                    onChange={this.handleDescriptionChange}
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item md={8} xs={12}>
                    <TextField
                      label="Notification type"
                      id="event_notification"
                      value={event.notification}
                      onChange={this.handleNotificationChange}
                      margin="normal"
                      fullWidth
                    />
                  </Grid>
                <Grid item md={8} xs={12}>
                  {
                    this.props.activities.map((activity, index) => {
                      return (
                        <div key={index}>
                          <Button
                            type="button"
                            key={index} onClick={ (e) => { this.handleLocation(activity.name, activity.id) } }
                            value={activity.id} key={`index`}
                            variant={ this.state.event_new.activity_id === activity.id ? "contained" : "outlined" }
                            color="secondary"
                          >
                            {activity.name}
                          </Button>
                        </div>
                      )
                    })
                  }
                </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={ this.handleSubmit }

          >
            Create Event
          </Button>

        </form>
      </Paper>
    )
  }
}

export default Form;
