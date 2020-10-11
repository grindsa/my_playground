'use strict';

import { Message } from './message.js';

class App extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Message, {
      headline: "foo1",
      text: "bar1"
    }), /*#__PURE__*/React.createElement(Message, {
      headline: "foo2",
      text: "bar2"
    }), /*#__PURE__*/React.createElement(Message, {
      headline: "foo3",
      text: "bar3"
    }));
  }

}

const domTarget = document.querySelector('#my-react-app');
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), domTarget);