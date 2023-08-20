import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';

const StyledItem = styled.li`
  font-size: 16px;
  display: flex;
  gap: 20px;
`;

export default function Contact({ id, name, number, handleDelete }) {
  return (
    <StyledItem>
      <span>{name}</span>
      <span>{number}</span>
      <Button type="button" handler={() => handleDelete(id)}>
        Delete
      </Button>
    </StyledItem>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
