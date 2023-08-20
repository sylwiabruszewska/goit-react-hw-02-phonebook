import styled from 'styled-components';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import { Component } from 'react';

import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import FilterInput from './FilterInput';

export const StyledApp = styled.div`
  background-color: #fff;
  margin: 20px 0;
  padding: 20px;
  border-radius: 10px;
  color: #313131;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  addNewContact = event => {
    event.preventDefault();

    const form = event.target;
    const {
      name: { value: name },
      number: { value: number },
    } = form.elements;

    const existingContact = this.checkIfContactExists(name);

    if (!existingContact) {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
      Notiflix.Notify.success('Contact added successfully');
      form.reset();
    } else {
      Notiflix.Notify.warning(`${name} is already in contacts`);
    }
  };

  checkIfContactExists(name) {
    const { contacts } = this.state;
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  }

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <StyledApp>
        <Section title="Phonebook">
          <ContactForm handler={this.addNewContact} />
        </Section>
        <Section title="Contacts">
          <FilterInput value={filter} onChange={this.handleFilterChange} />
          <ContactList contacts={filteredContacts} />
        </Section>
      </StyledApp>
    );
  }
}
