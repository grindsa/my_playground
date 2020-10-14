import React from 'react';

export class CounterStateless extends React.PureComponent{
  render() {
    return(
      <div>
      <h3> Counter Value is {this.props.counterValue}</h3>
      <button onClick={() => this.props.onClick()}> click me </button>
      </div>
    );
  }
}
