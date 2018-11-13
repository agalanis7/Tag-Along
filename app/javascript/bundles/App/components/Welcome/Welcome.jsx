import React, { Component } from 'react'
import  { BrowserRouter as Router, Route, Link } from  'react-router-dom'
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import greeting from '../Images/greeting.svg';
import Info from './Welcome/Info'

const handleLogIn = () => {
  Turbolinks.visit('/users/sign_in')
}

class Welcome extends Component {
  continue = e => {
    e.preventDefault();
    this.prps.nextStep()
  }
  render(){
    return(
    <div>
      <div className="greeting">
          <img src={greeting} width="300" height="150" />
      </div>
      <h1>Welcome</h1>
      <p>Some text here !</p>
      <Button onClick={this.continue}>Get started! </Button>
      <Button onClick={handleLogIn}>Have an account? Log in</Button>
    </div>
  )
  }
}

export default Welcome
