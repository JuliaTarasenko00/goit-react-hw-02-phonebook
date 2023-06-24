import { Component } from 'react';
import { nanoid } from 'nanoid/non-secure';
import { ContactsForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onAddPhoneBook = event => {
    const namePhone = this.state.contacts.find(
      ({ name }) => event.name === name
    );
    if (namePhone) {
      alert(`${event.name} is already in contacts.`);
      return;
    }
    const contact = {
      ...event,
      id: nanoid(),
    };
    this.setState({
      contacts: [contact, ...this.state.contacts],
    });
  };

  filterPhone = e => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
    return (
      <>
        <h1>Phonebook</h1>
        <ContactsForm onAddPhoneBook={this.onAddPhoneBook} />
        <h2>Contacts</h2>

        <input
          type="text"
          value={this.state.filter}
          onChange={this.filterPhone}
          placeholder="search"
        />
        <ul>
          {filteredContacts.map(({ name, number, id }) => (
            <li key={id}>
              <p>{name}: </p>
              <p>{number}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
