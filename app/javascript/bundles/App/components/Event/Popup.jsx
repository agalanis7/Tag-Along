import React, { Component } from 'react'

class Popup extends Component {

  render() {
    return (
      <div>
        <p>{this.props.events.properties.event_type}</p>
        <button id="event-btn">SHOW THIS EVENT</button>
      </div>
    )
  }
}

export default Popup
