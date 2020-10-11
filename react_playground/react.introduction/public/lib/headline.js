export class Headline extends React.Component {
  render() {
    const myStyle = {
      color: "red"
    };
    return /*#__PURE__*/React.createElement("h1", {
      style: myStyle
    }, this.props.headline);
  }

}