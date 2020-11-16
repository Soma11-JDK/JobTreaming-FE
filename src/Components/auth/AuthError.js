import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: red;
  font-weight: 500;
  text-align: center;
  font-size: 16px;
`;

const AuthError = ({ children }) => <Wrapper>{children}</Wrapper>;

AuthError.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AuthError;
