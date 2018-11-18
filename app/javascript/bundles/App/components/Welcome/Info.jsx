import React, { Component } from 'react'
import greeting from '../Images/greeting.svg';
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import sport from '../Images/sport.svg';

const handleSignUp = () => {
  Turbolinks.visit('/users/sign_up')
}
const handleSkip = () => {
  Turbolinks.visit('/events')
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  box: {
    textAlign: 'center',
  },
  button: {
    direction: 'row',
    justify: 'space-around',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: 380,
    maxHeight: 190,
  },
  logo: {
    height: 50,
    width: 320,
    textAlign: 'center',
    background: 'linear-gradient(45deg, #B2FF59 30%, #8BC34A 90%)',
    padding: theme.spacing.unit,
    color: 'white',
    fontWeight: 'bold',
  },
  cssRoot: {
    background: 'linear-gradient(45deg, #B2FF59 30%, #8BC34A 90%)',
    '&:hover': {
      background: '#33691E',
    },
    color: 'white',
    fontWeight: 'bold',
  },
});

class Info extends Component {
  state = {
  direction: 'column',
  justify: 'space-between',
  alignItems: 'center',
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep()
  }

  render(){
    const { classes } = this.props;
    const { alignItems, direction, justify } = this.state;

    return(
      <Grid container className={classes.root} spacing={24}  alignItems={alignItems} direction={direction}
              justify={justify}>
        <Grid item sm={12}>
            <Paper className={classes.logo}><div style={{ paddingTop: 10 }}>LOGO</div></Paper>
        </Grid>
        <Grid item sm={12}>
           <div style={{ paddingTop: 50 }}>
               <img src={sport} className={classes.img} />
           </div>
      </Grid>
      <Grid item sm={12}>
          <h3> THIS IN THE INFO </h3>
          <p>Our is the most awesome!</p>
          <p>Join Us!</p>
      </Grid>
      <Grid item xs container direction="row" justify="space-around" spacing={16} style={{ paddingTop: 60 }}>
         <Grid item sm={12} >
           <Button onClick={handleSignUp}>Skip</Button>
          </Grid>
          <Grid item sm={12}>
           <Button color="primary" onClick={handleSignUp} className={classes.cssRoot}>Sign up</Button>
          </Grid>
      </Grid>
    </Grid>
   )
  }
}

export default withStyles(styles)(Info)
