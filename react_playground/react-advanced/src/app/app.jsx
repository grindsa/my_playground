import React from 'react';
import { RegisterForm } from './registerform';
import { AttendeeList } from './attendeelist';
import { TabController } from './tabcontroller';
import { Tab } from './tab';

const mockAttendees = [
  {
    name: 'Foo Bar',
    tShirtSize: 'W-M',
    lunch: true
  },
  {
    name: 'Bar Foo',
    tShirtSize: 'M-L',
    lunch: true
  },
  {
    name: 'Far Boo',
    tShirtSize: 'W-L',
    lunch: false
  }
]

export class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      attendeeList: mockAttendees
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(newAttendee) {
    this.setState(prevState => {
      return {
        ... prevState,
        attendeeList: [
          ... prevState.attendeeList,
          newAttendee
        ]
      }
    });
  }

  render() {
    return (
      <TabController>
        <Tab headline="Registrierung">
          <RegisterForm onSubmit={this.handleSubmit}/>
        </Tab>
        <Tab headline="Teilnehmerliste">
          <AttendeeList attendees={this.state.attendeeList} />
        </Tab>
      </TabController>
    );
  }
}
