import React, { Component } from 'react'
import Welcome from './Welcome/Welcome.jsx'
import Info from './Welcome/Info.jsx'

class App extends Component {
 state = { step: 1 }
 nextStep = () => {
   const { step } = this.state;
  this.setState({
     step: step + 1
   });
 }

 prevStep = () => {
   const { step } = this.state;
  this.setState({
    step: step - 1
  });
 }

render(){
      switch( this.state.step ){
         case 1:
          return (<Welcome nextStep = {this.nextStep}/>);
         case 2:
          return (<Info prevStep = {this.prevStep} />);
       }
 }
}
export default App
