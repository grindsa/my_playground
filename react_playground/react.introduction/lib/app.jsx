const myElement = React.createElement(
  'p',
  {},
  'first react element foo'
);

const myJSXElement = <p id='my-id'> erste jsx komponente</p>

ReactDOM.render(
  myJSXElement,
  document.getElementById('react-app')
)
