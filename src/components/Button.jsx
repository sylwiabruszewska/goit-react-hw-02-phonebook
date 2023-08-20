import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 5px;
  width: 100px;
  cursor: pointer;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #dddddd;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  color: #666666;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #71a3ff;
    color: #fff;
  }
`;
export default function Button(props) {
  const { type = 'button', handler = null, children: text } = props;

  return (
    <StyledButton type={type} onClick={handler}>
      {text}
    </StyledButton>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handler: PropTypes.func,
};
