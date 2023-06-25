import { Component } from 'react';
import { nanoid } from 'nanoid/non-secure';
import { ContactsForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
export { ContactList } from './ContactList/ContactList';

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

  onRemoveContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
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
        <Filter value={this.state.filter} onChange={this.filterPhone} />
        <ContactList
          filteredContacts={filteredContacts}
          onClick={this.onRemoveContact}
        />
      </>
    );
  }
}
