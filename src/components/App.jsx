import React, { Component } from 'react';
import { nanoid } from 'nanoid/non-secure';
import { ContactsForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onAddPhoneBook = event => {
    console.log(event);
    const contact = {
      ...event,
      id: nanoid(),
    };
    this.setState({
      contacts: [contact, ...this.state.contacts],
    });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactsForm onAddPhoneBook={this.onAddPhoneBook} />
        <ul>
          {this.state.contacts.map(({ name, number, id }) => (
            <li key={id}>
              <p>{name}</p>
              <p>{number}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// }
