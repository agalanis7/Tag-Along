import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
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
  state = {
    event_new: {
      event_date: '',
      start_time: '',
      end_time: '',
      quantity: '',
      notification: '',

    },
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

  handleEndTimeChange = (event) => {
    let { event_new } = this.state;
    event_new.end_time = event.target.value;
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
    this.props.createEvent(event_new)
    event_new = { event_date: '',
    start_time: '',
    end_time: '',
    quantity: '',
    notification: '' }
    this.setState({ event_new })
  }

  render() {
    const { event_new } = this.state;
    console.log(event_new)
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
                  label="End Time"
                  id="event_end_time"
                  value={event.end_time}
                  onChange={this.handleEndTimeChange}
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
                      label="Notification type"
                      id="event_notification"
                      value={event.notification}
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
            Create Event
          </Button>

        </form>
      </Paper>
    )
  }
}

export default Form;
