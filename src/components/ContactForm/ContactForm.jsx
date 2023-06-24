import React, { Component } from 'react';

export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputChange = e => {
    // console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };
  formSubmit = e => {
    e.preventDefault();
    const phoneBook = {
      ...this.state,
    };
    this.props.onAddPhoneBook(phoneBook);
  };

  render() {
    return (
      <>
        <form onSubmit={this.formSubmit}>
          <label>
            <span>Name</span>
            <input
              onChange={this.inputChange}
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            <span>Phone</span>
            <input
              onChange={this.inputChange}
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button>Add contact</button>
        </form>
      </>
    );
  }
}
