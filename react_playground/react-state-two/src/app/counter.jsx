import React from 'react';

export class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      counterValue: 0
    };
  }

  onClick (){
    this.setState(state => {
      state.counterValue++;
      return state;
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
