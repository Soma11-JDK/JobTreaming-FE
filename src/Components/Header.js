import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import HeaderIcon from './HeaderIcon';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
`;

const HeaderLeft = styled.div`
  margin: 0 20px;
  display: flex;
  white-space: nowrap;
`;

const Logo = styled.div`
  height: 25px;
  object-fit: contain;
  margin-right: 10px;
`;

const Input = styled.input`
  align-items: center;
  display: flex;
  width: 40%;
  border: 1px solid black;
`;

function Header() {
  return (
    <Container>
      <HeaderLeft>
        <Logo>
          <span>Logo</span>
        </Logo>
        <span>사이트 맵</span>
      </HeaderLeft>
      <Input type="text" placeholder="강연을 검색어로 찾아보세요!" />
      <HeaderIcon />
    </Container>
  );
}

export default Header;
