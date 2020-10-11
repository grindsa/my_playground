'use strict';

import { Message } from './message.js'

class App extends React.Component{
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

const domTarget = document.querySelector('#my-react-app')
ReactDOM.render(<App />, domTarget)
