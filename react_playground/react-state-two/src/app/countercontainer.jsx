import React from 'react';

import { CounterStateless } from './counterstateless';
import { ResetCounter } from './resetcounter';

export class CounterContainer extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      counterValue: 0
    }
  }

  onIncrement(){
    this.setState(state => {
      return {
        counterValue: state.counterValue + 1
      }
    })
  }

  onResetZero(){
    this.setState({
        counterValue: 0
    });
  }

  render() {
    return(
      <div>
        <CounterStateless counterValue={ this.state.counterValue } onClick={() => this.onIncrement()} />
        <ResetCounter counterValue={ this.state.counterValue } onClick={() => this.onResetZero()} />
      </div>
    );
  }
}
