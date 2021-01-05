import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation
} from "react-router-dom";
// import { App } from './app/app'

function usePageViews() {
  let location = useLocation();
  console.log(location)
  return location
}

function App() {
  var foo = usePageViews();
  console.log(foo)
  return <div> buff </div>;
}

ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
    </Route>
  </Router>,
  document.getElementById('my-react-application')
)
