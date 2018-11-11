import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import greeting from './greeting.svg';

const handleLogIn = () => {
  Turbolinks.visit('/users/sign_in')
}

class Welcome extends Component {
  render(){
    return(
    <div>
      <div className="greeting">
          <img src={greeting} width="300" height="150" />
        </div>
      <h1>Welcome</h1>
      <p>Some text here !</p>
      <button> Get started! </button>
      <button onClick={handleLogIn}>Have an account? Log in</button>
    </div>
  )
  }
}

export default Welcome
