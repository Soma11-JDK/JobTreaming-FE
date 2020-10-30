import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import withLogin from './LoginHOC';

const Container = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const Icon = styled.img`
  height: 25px;
  margin-right: 5px;
`;

const Span = styled.div`
  word-break: keep-all;
  font-weight: bold;
  @media only screen and (max-width: 600px) {
    font-size: 2vw;
  }
`;

const imgUrl = require('assets/tempProfile.png');

const HeaderIcon = ({ onLogout }) => {
  return (
    <Container>
      <Icon src={imgUrl} alt="icon" />
      <Link to="/" onClick={onLogout}>
        <Span>로그아웃</Span>
      </Link>
    </Container>
  );
};

HeaderIcon.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default HeaderIcon;
