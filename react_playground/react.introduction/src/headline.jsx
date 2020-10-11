export class Headline extends React.Component {
  render() {
    const myStyle = {
      color: "red"
    }
    return(
      <h1 style={ myStyle }>{this.props.headline}</h1>
    );
  }
}
