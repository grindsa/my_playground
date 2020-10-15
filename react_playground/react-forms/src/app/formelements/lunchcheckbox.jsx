import React from 'react';

export class LunchCheckbox extends React.Component {
  render() {
    return (
      <label> Mittach:
      <input type='Checkbox'
        name="lunch"
        checked={this.props.checked}
        onChange={this.props.onChange}
      />
      </label>
    );
  }
}
