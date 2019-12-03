import React, { Component } from 'react';
import MuiThemeProvider from'material-ui/styles/MuiThemeProvider'
import AppBar from'material-ui/AppBar'
import TextField from'material-ui/TextField'
import RaisedButton from'material-ui/RaisedButton'
import ThirdStep from './ThirdStep'

export class SecondStep extends React.Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }
  render() {
    const {values}=this.props
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Data"/>
          <TextField
            hintText="Enter Your Name"
          />
          <br/>
          <RaisedButton
            label="Next"
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default SecondStep
