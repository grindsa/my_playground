export function Paragraph(props) {
  const myVariable = "Das ist der Inhalt einer Variable";
  return /*#__PURE__*/React.createElement("p", {
    className: "paragraph"
  }, " ", props.text, " ");
}