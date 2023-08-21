import PropTypes from 'prop-types';
import { StyledInput } from './Input.styled';

export default function Input(props) {
  const { type, name, pattern, title } = props;

  return (
    <StyledInput type={type} name={name} pattern={pattern} title={title} />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
