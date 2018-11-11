import React, { Component } from 'react'
import Welcome from './Welcome'
import Info from './Info';
import Carousel from 'nuka-carousel';

class App extends Component {
  render(){
    return(
    <Carousel>
      <Welcome />
      <Info />
    </Carousel>
   )
  }
}
export default App
