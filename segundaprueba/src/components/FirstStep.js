import React, { Component } from 'react';
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'

export class FirstStep extends React.Component {
  state={
    step:1,
    name:'',
    location:'',
    age:''
  }
//To go into the next step

nextStep = () => {
  const {step}=this.state
  this.setState({
    step:step+1
  })
}

//Prev
prevStep = () => {
  const {step}=this.state
  this.setState({
    step:step-1
  })
}

//Handle Field Change

handleChange = input => (e) =>{
  this.setState({[input]:e.target.value})

}

  render() {
    const {step}=this.state
    const {name,location,age}=this.state
    const values = {
      name,location,age
    }

    switch (step) {
      case 1:
      return (
          <SecondStep
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        break;
        case 2:
         return(
           <ThirdStep
             nextStep={this.nextStep}
             prevStep={this.prevStep}
             handleChange={this.handleChange}
             values={values}
           />
           )
    }



  }
}

export default FirstStep
