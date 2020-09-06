import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import HeaderIcon from './HeaderIcon';

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
  border-bottom: 1px solid black;
`;

const HeaderLeft = styled.div`
  margin: 0 20px;
  display: flex;
  white-space: nowrap;
`;

const logoUrl = require('assets/tempLogo.png');

const Logo = styled.div`
  height: 25px;
  object-fit: contain;
  margin-right: 10px;
`;

const Span = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  align-items: center;
  display: fixed;
  width: 40vw;
  --bg-opacity: 1;
  background-color: rgba(238, 238, 238, var(--bg-opacity));
  border-radius: 9999px;
  border: 1px solid black;
  height: 35px;
  flex: 0.7;
  margin-right: 50px;
  padding-left: 10px;
`;

const ShortCut = styled.div`
  order: 1;
  width: 150px;
  height: 20px;
  text-align: right;
  word-break: keep-all;
`;

const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PetitionContainer = styled.div`
  width: 60px;
  height: 20px;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

class Header extends PureComponent {
  render() {
    const { logged, onLogout } = this.props;

    return (
      <Container>
        <HeaderLeft>
          <Link to="/">
            <Logo> JobTreaming</Logo>
          </Link>
          <Span>사이트 맵</Span>
        </HeaderLeft>
        <CenterContainer>
          <Link to="/petition">
            <PetitionContainer>청원하기</PetitionContainer>
          </Link>
          <Input type="text" placeholder="강연을 검색어로 찾아보세요!" />
        </CenterContainer>
        {logged ? (
          <HeaderIcon onLogout={onLogout} />
        ) : (
          <ShortCut>
            <Link to="/login">로그인 / 회원가입</Link>
          </ShortCut>
        )}
      </Container>
    );
  }
}

Header.propTypes = {
  logged: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Header;
