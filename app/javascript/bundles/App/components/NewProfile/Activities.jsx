import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Paper from '@material-ui/core/Paper'
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

class Activities extends Component {
  state = {
      labelWidth: 0,

 };


componentDidMount() {
  this.setState({
    labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
  });
}
render() {
  return(
    <Grid item md={8} xs={12}>
        <InputLabel
           ref={ref => {
             this.InputLabelRef = ref;
           }}
           htmlFor="outlined-age-native-simple"
         >
           Activity
         </InputLabel>
         <Select
           native
           value={this.props.activity_id}
           onChange={this.props.handleChange}
           input={
             <OutlinedInput
               name="activity"
               labelWidth={this.state.labelWidth}
               id="outlined-age-native-simple"
             />
           }
         >
           <option value="" />
           { this.props.activities.map((activity, index) =>{
             return  <option value={activity.id} key={index}>{activity.name}</option>
           })
           }
         </Select>
       </Grid>

  )
}
}


export default Activities
