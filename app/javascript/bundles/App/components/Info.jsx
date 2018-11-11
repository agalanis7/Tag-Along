import React, { Component } from 'react'

const handleLogIn = () => {
  Turbolinks.visit('/users/sign_in')
}

class Info extends Component {
  render(){
    return(
    <div>
      <h1> THIS IN THE INFO </h1>
      <button onClick={handleLogIn}>Sign up</button>
    </div>
  )
  }
}

export default Info
