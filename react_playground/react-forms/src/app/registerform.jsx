import React from 'react';
import { NameInput } from './formelements/nameinput'
import { TShirtSelect } from './formelements/tshirtselect'
import { LunchCheckbox } from './formelements/lunchcheckbox'

const emptyForm = {
  name: '',
  tShirtSize: 'w-s',
  lunch: false,
  formSubmitted: false
};

export class RegisterForm extends React.Component {
  constructor(props){
    super(props);
    this.state = emptyForm
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleresetForm = this.handleresetForm.bind(this);
  }

  handleChange(event) {
    const value = event.target.name === 'lunch' ? event.target.checked : event.target.value
    /* above means
    let value;
    if (event.target.name === 'lunch'){
      value = event.target.checked
    } else {
      value = event.target.value
    }
    */
    this.setState({
      [event.target.name]: value
    });
  }

  handleSubmit(event){
    console.log(this.state);
    this.setState({
      formSubmitted: true
    })
  }

  handleresetForm(event){
    this.setState(emptyForm);
  }

  render() {
    if (!this.state.formSubmitted) {
      return (
        <div>
          <NameInput value={this.state.name} onChange={this.handleChange} />
          <TShirtSelect value={this.state.tShirtSize} onChange={this.handleChange} />
          <LunchCheckbox checked={this.state.lunch} onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>Anmelden</button>
        </div>
      )
    } else {
      return (
        <div>
          <h2> Anmeldung erfolgt </h2>
          <button onClick={this.handleresetForm}> weiteren Teilnehmen anmelden</button>
        </div>
      )
    }
  }
}
