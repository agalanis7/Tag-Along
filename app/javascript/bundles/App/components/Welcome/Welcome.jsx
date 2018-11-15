import React, { Component } from 'react'
import greeting from '../Images/greeting.svg';
import Info from './Info'
import Button from '@material-ui/core/Button'

const handleSignUp = () => {
  Turbolinks.visit('/users/sign_in')
}

class Welcome extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep()
  }
  render(){
    return(
    <div>
      <div className="logo"><div>LOGO</div></div>
      <div className="greeting">
          <img src={greeting} width="300" height="150" />
      </div>
      <h1>Welcome</h1>
      <p>Some text here !</p>
      <Button color="primary" onClick={this.continue}>Get started!</Button>
      <div>
      <Button onClick={handleSignUp}>Have an account? Log in</Button>
      </div>
    </div>
  )
  }
}

export default Welcome
