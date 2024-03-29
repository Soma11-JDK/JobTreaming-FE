import React, { useState, useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as userActions from 'redux/modules/user';
import { bindActionCreators } from 'redux';
import * as searchActions from 'redux/modules/search';
import CategoryContext from '../CategoryContext';
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

const Form = styled.form``;
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

const Header = props => {
  /* const [categoryItems, setCategory] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCategoryItems = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const { data: result } = await categoryApi.categoryList();
        setCategory(JSON.stringify({ result }));
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategoryItems();
  }, []); */
  const categoryItems = useContext(CategoryContext);
  const [dropdown, setDropdown] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
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

  const searchByTerm = () => {
    const { history, SearchActions } = props;

    // searchTerm = { searchTerm };
    SearchActions.setSearchInfo(searchTerm);
    history.push('/search');
  };

  const handleSubmit = event => {
    event.preventDefault();

    searchByTerm();
  };

  const updateTerm = event => {
    const {
      target: { value },
    } = event;
    setSearchTerm(value);
  };

  const { user, location } = props;

  return (
    <Container>
      <HeaderLeft>
        <Link to="/">
          <Logo
            src={largeLogo}
            srcSet={`${smallLogo} 300w, ${mediumLogo} 768w, ${largeLogo} 1280w`}
          />
        </Link>
        <Form onSubmit={handleSubmit}>
          <Input
            current={location.pathname === '/'}
            type="text"
            placeholder="검색하기"
            onFocus={onFocusEnter}
            onBlur={onFocusOut}
            name="search"
            value={searchTerm}
            onChange={updateTerm}
            searchIconUrl={searchFocus ? '' : searchIcon}
          />
        </Form>
      </HeaderLeft>
      <HeaderRight>
        <NavItem
          onClick={onMouseLeave}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <SLink to="/category/0">
            <Span> 카테고리 </Span>
          </SLink>
          {dropdown && (
            <DropdownContainer>
              <Dropdown categoryItems={categoryItems} nowPage="category" />
            </DropdownContainer>
          )}
        </NavItem>
        <NavItem>
          <SLink to="/recommend">
            <Span>강연추천</Span>
          </SLink>
        </NavItem>

        <NavItem>
          <SLink to="/petition/0">
            <Span>청원하기</Span>
          </SLink>
        </NavItem>
        <NavItem>
          <SLink
            to={{
              pathname: '/mylectureroom/mylecture',
              state: 'mylecture',
            }}
          >
            <Span>나의 강의장</Span>
          </SLink>
        </NavItem>
        <NavItem>
          <SLink
            to={{
              pathname: '/mypage/notification/notification',
              state: 'notification',
            }}
          >
            <Span>알림</Span>
          </SLink>
        </NavItem>
        <NavItem>
          {console.log(`user: ${user.get('logged')}`)}
          {user.get('logged') ? (
            <SLink to="/mypage/payment">
              <Span> 마이페이지</Span>
            </SLink>
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
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    get: PropTypes.func.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  SearchActions: PropTypes.shape().isRequired,
};

export default connect(
  state => ({
    user: state.user,
  }),
  dispatch => ({
    UserActions: bindActionCreators(userActions, dispatch),
    SearchActions: bindActionCreators(searchActions, dispatch),
  }),
)(withRouter(Header));
