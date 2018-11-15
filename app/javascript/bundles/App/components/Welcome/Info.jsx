import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import sport from '../Images/sport.svg';

const handleSignUp = () => {
  Turbolinks.visit('/users/sign_up')
}

class Info extends Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep()
  }

  render(){
    return(
    <div className="welcome">
      <div className="logo"><div>LOGO</div></div>
      <div className="sport">
          <img src={sport} width="300" height="150" />
      </div>
      <h1> THIS IN THE INFO </h1>
      <Button onClick={this.back}>Back</Button>
      <Button color="primary" onClick={handleSignUp}>Sign up</Button>
    </div>
   )
  }
}

export default Info
