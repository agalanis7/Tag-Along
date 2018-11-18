import React, { Component } from 'react'

class Popup extends Component {

  handleClick() {
    console.log("hello world")
    Turbolinks.visit(`/events/${this.props.loc.id}`)
  }
  render() {
    return (
      <div>
        <p>{this.props.events.description}</p>
        <button id={this.props.loc.id} onClick={this.handleClick}>Show Event</button>
      </div>
    )
  }
}

export default Popup
