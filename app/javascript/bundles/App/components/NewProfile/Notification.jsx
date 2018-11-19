import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import classNames from 'classnames';


const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});

class Notification extends React.Component {
  state = {
    notification: false
  };

  handleChange = event => {
    this.setState({ notification: event.target.value})
    if (this.state.notification) {
      this.props.handleNotificationChange(event.target.value)
    }
    console.log(`Inside the handleChange ${event.target.value}`)
    //   if (value == "true") {
    //     this.setState({ notification: true})
    //     this.props.handleNotificationChange(this.state.notification)
    //   }
    };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Notifications</FormLabel>
          <RadioGroup
            aria-label="notification"
            name="notifications"
            value={ this.state.notification }
          >
            <FormControlLabel
              value="true"
              control={<Radio />}
              label="Get by email"
              onChange={ this.handleChange }
            />
            <FormControlLabel
              value=""
              control={<Radio />}
              label="Do Not Get"
              onChange={ this.handleChange }
            />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}


export default withStyles(styles)(Notification)
