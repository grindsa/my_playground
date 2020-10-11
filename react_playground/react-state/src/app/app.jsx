import React from 'react';
import { Message } from './message'

export class App extends React.Component{
  render(){
    return (
      <div>
        <Message headline="foo1" text="bar1" />
        <Message headline="foo2" text="bar2" />
        <Message headline="foo3" text="bar3" />
      </div>
    );
  }
}
