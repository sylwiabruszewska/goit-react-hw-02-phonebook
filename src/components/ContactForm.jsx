import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';
import Input from './Input';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function ContactForm({ handler }) {
  return (
    <StyledForm onSubmit={handler}>
      <label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <Button type="submit">Add contact</Button>
    </StyledForm>
  );
}

ContactForm.propTypes = {
  handler: PropTypes.func.isRequired,
};
