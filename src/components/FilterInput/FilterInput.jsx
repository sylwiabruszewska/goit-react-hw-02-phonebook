import PropTypes from 'prop-types';
import { StyledFilterInput } from './FilterInput.styled';

export default function FilterInput({ value, onChange }) {
  return (
    <label>
      Find contacts by name
      <StyledFilterInput
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Search by name"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

FilterInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
