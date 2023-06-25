import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ContactsForms,
  ContactsLabel,
  ContactsBtn,
  ContactsInput,
} from './ContactsForm.styled';

export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  formSubmit = e => {
    e.preventDefault();
    this.props.onAddPhoneBook(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <ContactsForms onSubmit={this.formSubmit}>
          <ContactsLabel>
            <span>Name</span>
            <ContactsInput
              onChange={this.inputChange}
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </ContactsLabel>
          <ContactsLabel>
            <span>Phone</span>
            <ContactsInput
              onChange={this.inputChange}
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </ContactsLabel>
          <ContactsBtn>Add contact</ContactsBtn>
        </ContactsForms>
      </>
    );
  }
}

ContactsForm.propTypes = {
  onSubmit: PropTypes.func,
};
