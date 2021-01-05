import React from 'react';
import { Page1 } from './page1';
import { Page2 } from './page2';

export const App = () => {
  return (
    <React.Fragment>
      <h1> hello world!! </h1>

      <Page1 />
      <Page2 />
    </React.Fragment>
  );
}
