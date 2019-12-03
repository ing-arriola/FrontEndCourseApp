import React, { Component } from 'react';
import MuiThemeProvider from'material-ui/styles/MuiThemeProvider'
import AppBar from'material-ui/AppBar'
import TextField from'material-ui/TextField'
import RaisedButton from'material-ui/RaisedButton'

export class ThirdStep extends React.Component {
  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }
  render() {
    const {values}=this.props
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter More Data"/>
          <TextField
            hintText="The date"
          />
          <br/>
          <RaisedButton
            label="Prev"
            onClick={this.back}
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

export default ThirdStep
