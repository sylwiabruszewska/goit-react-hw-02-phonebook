import styled from 'styled-components';

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
      <section>
        <h2>Phonebook</h2>
        <form action="">
          <label>
            Name
            <input type="text" />
          </label>
          <button>Add contact</button>
        </form>
      </section>
      <section>
        <h2>Contacts</h2>
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
      </section>
    </StyledApp>
  );
};
