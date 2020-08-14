import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 5px;
  display: flex;
`;

const Icon = styled.img`
  height: 25px;
  object-fit: contain;
`;

const Text = styled.div``;

const imgUrl = require('assets/tempProfile.png');

const HeaderIcon = () => (
  <Container>
    {/* <Icon src={imgUrl} alt="icon" /> */}
    <Text>로그인</Text>
  </Container>
);

export default HeaderIcon;
