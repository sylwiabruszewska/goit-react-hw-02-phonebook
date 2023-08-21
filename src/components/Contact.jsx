import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';

const StyledItem = styled.li`
  font-size: 16px;
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  align-items: center;

  & div {
    width: 50%;
  }
`;

const StyledBox = styled.div`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

export default function Contact({ id, name, number, handleDelete }) {
  return (
    <StyledItem>
      <StyledBox>
        <StyledIcon icon={faUser} style={{ color: '#71a3ff' }} />
        <span>{name}</span>
      </StyledBox>

      <StyledBox>
        <StyledIcon icon={faPhone} style={{ color: '#71a3ff' }} />
        <span>{number}</span>
      </StyledBox>
      <Button type="button" handler={() => handleDelete(id)}>
        Delete
      </Button>
    </StyledItem>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
