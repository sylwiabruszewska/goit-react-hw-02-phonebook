import styled from 'styled-components';
import { nanoid } from 'nanoid';

import { Component } from 'react';

import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

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
  };

  addNewContact = event => {
    event.preventDefault();

    const form = event.target;
    const {
      name: { value: name },
      number: { value: number },
    } = form.elements;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    form.reset();
  };

  render() {
    const contacts = this.state.contacts;

    return (
      <StyledApp>
        <Section title="Phonebook">
          <ContactForm handler={this.addNewContact} />
        </Section>
        <Section title="Contacts">
          <div>
            <label>
              Find contacts by name
              <input type="text" />
            </label>
          </div>
          <ContactList contacts={contacts}></ContactList>
        </Section>
      </StyledApp>
    );
  }
}
