import React, { Component } from 'react'
import greeting from "../Images/background.jpg";
import Info from './Info'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import logo from '../Images/logo.png'


const handleSignUp = () => {
  Turbolinks.visit('/users/sign_in')
}
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  box: {
    textAlign: 'center',
  },
  header:{
      fontFamily: 'Roboto',
      color: 'white',
      fontStyle: 'italic',
      
  },
  p:{
    fontFamily: 'Roboto',
    fontSize: 40,
    color:'black',
    fontWeight:'bold',
    height: '70px',
    width: '320px',
    justify:'center',
  },
  logoImg: {
    height: '80px',
    width: '160px',

  },
  
  img: {
    margin: 'auto',
    display: 'block',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  link: {
    variant: 'outlined',
    fontWeight: 'lighter',
    color: '#b1b5b2',
  },
  logo: {
    height: 70,
    width: 320,
    textAlign: 'center',
    background: 'linear-gradient(45deg, #B2FF59 30%, #8BC34A 90%)',
    padding: theme.spacing.unit,
  },
  cssRoot: {
    background: 'linear-gradient(45deg, #B2FF59 30%, #8BC34A 90%)',
    '&:hover': {
      background: '#33691E',
    },
    color: 'white',
    fontWeight: 'bold',
  
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});


class Welcome extends Component {
  state = {
  direction: 'column',
  justify: 'space-between',
  alignItems: 'center',
};

  continue = e => {
    e.preventDefault();
    this.props.nextStep()
  }
  render(){
    const { classes } = this.props;
    const { alignItems, direction, justify } = this.state;

    return(

    <Grid container className={classes.root} spacing={24}  alignItems={alignItems} direction={direction}
            justify={justify}>
      <Grid item sm={12}>
       <Paper className={classes.logo}>

             <img src={logo} className={classes.logoImg} />

       </Paper>
      </Grid>
      <Grid item sm={12}>
      <div style={{ paddingTop: 50 }}>
          <img src={greeting} className={classes.img} />
      </div>
    </Grid>
    <Grid item xs={12} className={classes.box} >
      <h1 className={classes.header}>Host and join pickup games</h1>
      <div className={classes.p} >
      {/* <p className={classes.header}>Team Sports</p> */}
      </div>
  </Grid>
     <Grid item xs style={{ paddingTop: 40 }}>
       <Button className={classes.cssRoot} onClick={this.continue}>Begin</Button>
     </Grid>
     <Grid item xs style={{ paddingTop: 20 }}>
      <Button onClick={handleSignUp} className={classes.link}>Have an account? <br/> Log in</Button>
     </Grid>

    </Grid>
  )
  }
}

export default withStyles(styles)(Welcome);
