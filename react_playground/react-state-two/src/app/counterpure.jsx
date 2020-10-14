import React from 'react';

export class CounterPure extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      counterValue: 0
    };
  }

  onClick(){
    this.setState(state => {
      return {
        counterValue: state.counterValue + 1
      }
    })
  }

  render() {
    return(
      <div>
      <h3> Counter Value is {this.state.counterValue}</h3>
      <button onClick={() => this.onClick()}> click me </button>
      </div>
    );
  }
}
