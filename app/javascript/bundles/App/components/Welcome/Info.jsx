import React, { Component } from 'react'
import  { BrowserRouter as Router, Route, Link } from  'react-router-dom'
import greeting from '../Images/greeting.svg';

const handleLogIn = () => {
  Turbolinks.visit('/users/sign_up')
}

class Info extends Component {
  back = e => {
    e.preventDefault();
    this.prps.prevStep()
  }

  render(){
    return(
    <div className="welcome">
      <h1> THIS IN THE INFO </h1>
      <button onClick={this.back}>Back</button>
      <button onClick={handleLogIn}>Sign up</button>
    </div>
  )
  }
}

export default Info
