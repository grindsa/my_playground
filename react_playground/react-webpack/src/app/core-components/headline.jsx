import React from 'react';
import './headline.css';

export class Headline extends React.Component {
  render() {
    return(
      <h1 className="headline">{this.props.headline}</h1>
    );
  }
}
