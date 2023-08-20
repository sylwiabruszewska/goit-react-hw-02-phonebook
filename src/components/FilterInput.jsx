import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFilterInput = styled.input`
  display: block;
  padding: 5px;
  margin: 4px 0;
  width: 100%;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #dddddd;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  color: #666666;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:focus {
    outline: 2px solid #71a3ff;
  }
`;

export default function FilterInput({ value, onChange }) {
  return (
    <StyledFilterInput
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      placeholder="Search by name"
      value={value}
      onChange={onChange}
    />
  );
}

FilterInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
