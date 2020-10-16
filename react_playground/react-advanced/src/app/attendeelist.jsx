import React from 'react';

export class AttendeeList extends React.Component {
  render() {
    /* console.log(this.props.attendees) */
    const attendeeList = this.props.attendees.map((attendee, index) =>{
      const key = `attendee-${index}`;
      return (
        <tr key={key}>
          <td>{ attendee.name }</td>
          <td>{ attendee.tShirtSize }</td>
          <td><input type="Checkbox" checked={ attendee.lunch } /></td>
        </tr>
      )
    });
    return (
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>T-shirt</td>
            <td>bleibt zum Mittag</td>
          </tr>
        </thead>
        <tbody>
        { attendeeList }
        </tbody>
       </table>
    )
  }
}
