const myElement = React.createElement('p', {}, 'first react element foo');
const myJSXElement = /*#__PURE__*/React.createElement("p", {
  id: "my-id"
}, " erste jsx komponente foo");
ReactDOM.render(myJSXElement, document.getElementById('react-app'));