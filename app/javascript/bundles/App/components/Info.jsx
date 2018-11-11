import React, { Component } from 'react'

const handleLogIn = () => {
  Turbolinks.visit('/users/sign_up')
}

class Info extends Component {
  render(){
    return(
    <div className="welcome">
      <h1> THIS IN THE INFO </h1>
      <button onClick={handleLogIn}>Sign up</button>
    </div>
  )
  }
}

export default Info
