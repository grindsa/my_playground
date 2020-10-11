import React from 'react';
import { Paragraph } from './core-components/paragraph'
import { Headline } from './core-components/headline'

export class Message extends React.Component {
  render() {
    return (
      <div>
        <Headline headline={this.props.headline} />
        <Paragraph text={this.props.text} />
      </div>
    )
  }
}
