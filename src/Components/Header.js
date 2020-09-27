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

const smallLogo = require('assets/Logo/Logo.png');
const mediumLogo = require('assets/Logo/Logo@2x.png');
const largeLogo = require('assets/Logo/Logo@3x.png');

const Logo = styled.img`
  height: 25px;
  object-fit: contain;
  margin-right: 10px;
`;

const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  margin-right: 20px;
  align-items: center;
`;

const Span = styled.div`
  word-break: keep-all;
  font-weight: bold;
  margin-left: 10px;
  @media only screen and (max-width: 600px) {
    font-size: 2vw;
  }
`;

class Header extends PureComponent {
  render() {
    const { logged, onLogout } = this.props;

    return (
      <Container>
        <HeaderLeft>
          <Link to="/">
            <Logo
              src={largeLogo}
              srcSet={`${smallLogo} 300w, ${mediumLogo} 768w, ${largeLogo} 1280w`}
            />
          </Link>
        </HeaderLeft>

        <HeaderRight>
          <Link to="/">
            <Span>카테고리</Span>
          </Link>
          <Link to="/petition">
            <Span>청원하기</Span>
          </Link>
          <Link to="/">
            <Span>나의 강의장</Span>
          </Link>
          <Link to="/">
            <Span>알림</Span>
          </Link>
          {logged ? (
            <HeaderIcon onLogout={onLogout} />
          ) : (
            <Link to="/login">
              <Span>로그인 / 회원가입</Span>
            </Link>
          )}
        </HeaderRight>
      </Container>
    );
  }
}

Header.propTypes = {
  logged: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Header;
