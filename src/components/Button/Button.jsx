import PropTypes from 'prop-types';

import { StyledButton } from './Button.styled';

export default function Button(props) {
  const {
    type = 'button',
    handler = null,
    children: text,
    customColor,
  } = props;

  return (
    <StyledButton type={type} onClick={handler} customColor={customColor}>
      {text}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handler: PropTypes.func,
  customColor: PropTypes.string,
};
