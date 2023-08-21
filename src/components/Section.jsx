import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledSection = styled.section`
  margin-bottom: 20px;

  & h2 {
    margin: 20px 0 10px;
    font-weight: 600;
  }
`;

export default function Section({ title, children }) {
  return (
    <StyledSection>
      <h2>{title}</h2>
      <div>{children}</div>
    </StyledSection>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
