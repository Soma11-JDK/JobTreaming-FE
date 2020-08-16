import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import HeaderIcon from './HeaderIcon';

const Container = styled.div`
  width: 100%;
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
  display: fixed;
  width: 40vw;
  --bg-opacity: 1;
  background-color: rgba(238, 238, 238, var(--bg-opacity));
  border-radius: 9999px;
  border: 1px solid black;
  height: 35px;
`;

const ShortCut = styled.div`
  order: 1;
  width: 150px;
  height: 20px;
  text-align: right;
`;

class Header extends PureComponent {
  render() {
    const { logged, onLogout } = this.props;
    return (
      <Container>
        <HeaderLeft>
          <Logo>
            <Link to="/">Logo</Link>
          </Logo>
          <span>사이트 맵</span>
        </HeaderLeft>
        <Input type="text" placeholder="강연을 검색어로 찾아보세요!" />
        {logged ? (
          <HeaderIcon onLogout={onLogout} />
        ) : (
          <ShortCut>
            <Link to="/login">로그인/회원가입</Link>
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
