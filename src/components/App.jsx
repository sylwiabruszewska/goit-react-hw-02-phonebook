import styled from 'styled-components';

import Section from './Section';
import Button from './Button';

export const StyledApp = styled.div`
  background-color: #fff;
  margin: 20px 0;
  padding: 20px;
  border-radius: 10px;
  color: #313131;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const App = () => {
  return (
    <StyledApp>
      <Section title="Phonebook">
        <form action="">
          <label>
            Name
            <input type="text" />
          </label>
          <Button>Add contact</Button>
        </form>
      </Section>
      <Section title="Contacts">
        <div>
          <label>
            Find contacts by name
            <input type="text" />
          </label>
        </div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </Section>
    </StyledApp>
  );
};
