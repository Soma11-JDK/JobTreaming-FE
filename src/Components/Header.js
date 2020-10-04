import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { categoryItems } from 'Components/Category';
import HeaderIcon from './HeaderIcon';
import Dropdown from './Dropdown';

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
  height: 100%;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Span = styled.div`
  word-break: keep-all;
  font-weight: bold;
  margin-left: 10px;
  height: 100%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 600px) {
    font-size: 2vw;
  }
`;

const SLink = styled(Link)`
  height: 100%;
`;

const Header = ({ logged, onLogout }) => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

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
        <NavItem
          onClick={onMouseLeave}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <SLink to="/category/1">
            <Span> 카테고리 </Span>
          </SLink>
          {dropdown && <Dropdown categoryItems={categoryItems} />}
        </NavItem>
        <NavItem>
          <SLink to="/petition">
            <Span>청원하기</Span>
          </SLink>
        </NavItem>
        <NavItem>
          <SLink to="/">
            <Span>나의 강의장</Span>
          </SLink>
        </NavItem>
        <NavItem>
          <SLink to="/">
            <Span>알림</Span>
          </SLink>
        </NavItem>
        <NavItem>
          {logged ? (
            <HeaderIcon onLogout={onLogout} />
          ) : (
            <SLink to="/login">
              <Span>로그인 / 회원가입</Span>
            </SLink>
          )}
        </NavItem>
      </HeaderRight>
    </Container>
  );
};

Header.propTypes = {
  logged: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Header;
