import styled from 'styled-components';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import { Component } from 'react';

import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import FilterInput from './FilterInput';

export const StyledPhonebook = styled.div`
  background-color: #fff;
  margin: 20px 0;
  padding: 0 20px;
  border-radius: 10px;
  color: #313131;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  min-width: 300px;
  width: 90%;

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1200px) {
    width: 50%;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
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

  removeContact = id => {
    const removedContact = this.state.contacts.find(
      contact => contact.id === id
    );

    if (removedContact) {
      this.setState(state => ({
        contacts: state.contacts.filter(contact => contact.id !== id),
      }));

      Notiflix.Notify.success(`${removedContact.name} has been removed`);
    }
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <StyledContainer>
        <StyledPhonebook>
          <h1>Phonebook</h1>
          <ContactForm handler={this.addNewContact} />

          <Section title="Contacts">
            <FilterInput value={filter} onChange={this.handleFilterChange} />
            <ContactList
              contacts={filteredContacts}
              handleDelete={this.removeContact}
            />
          </Section>
        </StyledPhonebook>
      </StyledContainer>
    );
  }
}
