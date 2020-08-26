import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import withLogin from './LoginHOC';

const Container = styled.div`
  padding: 5px;
  width: 150px;
  display: flex;
  align-items: center;
  text-align: right;
  justify-content: flex-end;
`;

const Icon = styled.img`
  height: 25px;
  object-fit: contain;
  margin-right: 5px;
`;

const imgUrl = require('assets/tempProfile.png');

// eslint-disable-next-line react/prop-types
const HeaderIcon = ({ onLogout }) => {
  return (
    <Container>
      <Icon src={imgUrl} alt="icon" />
      <Link to="/" onClick={onLogout}>
        로그아웃
      </Link>
    </Container>
  );
};

export default HeaderIcon;
