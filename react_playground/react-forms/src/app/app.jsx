import React from 'react';
import { RegisterForm } from './registerform';

export class App extends React.Component {
  render() {
    return (
      <div>
       <h1> Anmeldeformular für React Workshop </h1>
       <RegisterForm />
      </div>
    );
  }
}
