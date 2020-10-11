import { Paragraph } from './paragraph.js'
import { Headline } from './headline.js'

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
