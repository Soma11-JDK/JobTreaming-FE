import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 12px;
  padding: 5px;
  display: flex;
`;

const Icon = styled.div`
  height: 10px;
  object-fit: contain;
`;

const Text = styled.div`
  font-size: 12px;
`;

const HeaderIcon = () => (
  <Container>
    <Text>로그인</Text>
  </Container>
);

export default HeaderIcon;
