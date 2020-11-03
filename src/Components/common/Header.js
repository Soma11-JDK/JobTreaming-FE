import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { categoryItems } from 'Components/Category';
import HeaderIcon from '../HeaderIcon';
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
  align-items: center;
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

const DropdownContainer = styled.div`
  width: 169px;
  height: 100%;
  top: 60px;
  position: absolute;
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

const searchIcon = require('assets/fe:search.png');

const Input = styled.input`
  background: #e3e3e3 url(${props => props.searchIconUrl}) center right
    no-repeat;
  background-origin: content-box;
  align-items: center;
  border-radius: 66px;
  border: 1px solid #e3e3e3;
  padding-left: 20px;
  padding-right: 24px;
  width: 25vw;
  height: 44px;
  border-radius: 66px;
  display: ${props => (props.current ? 'none' : 'default')};
`;

const SLink = styled(Link)`
  height: 100%;
  text-decoration: none;
`;

const Header = ({ location: { pathname }, logged, onLogout }) => {
  const [dropdown, setDropdown] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const onFocusEnter = () => {
    setSearchFocus(true);
  };

  const onFocusOut = () => {
    setSearchFocus(false);
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
        <Input
          current={pathname === '/'}
          type="text"
          placeholder="검색하기"
          onFocus={onFocusEnter}
          onBlur={onFocusOut}
          searchIconUrl={searchFocus ? '' : searchIcon}
        />
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
          {dropdown && (
            <DropdownContainer>
              <Dropdown categoryItems={categoryItems} />
            </DropdownContainer>
          )}
        </NavItem>
        <NavItem>
          <SLink to="/petition">
            <Span>청원하기</Span>
          </SLink>
        </NavItem>
        <NavItem>
          <SLink
            to={{ pathname: '/mylectureroom/mylecture', state: 'mylecture' }}
          >
            <Span>나의 강의장</Span>
          </SLink>
        </NavItem>
        <NavItem>
          <SLink to="/write">
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
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Header);
