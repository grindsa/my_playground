import React from 'react';
import { Counter } from './counter';
import { CounterPure } from './counterpure';
import { CounterContainer } from './countercontainer';

export class App extends React.Component {
  render() {
    return (
      <div>
      <h1> Counter </h1>
      <Counter />
      <hr />
      <h1> CounterPure </h1>
      <CounterPure />
      <h1> CounterStateless </h1>
      <CounterContainer />
      </div>
    );
  }
}
