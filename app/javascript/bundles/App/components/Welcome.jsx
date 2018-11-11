import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

class Welcome extends Component {
  render(){
    return(
    <div>
      <h1>Welcome</h1>
    </div>
  )
  }
}

export default Welcome
