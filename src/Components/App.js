import React, { Component } from 'react';
import styled from 'styled-components';
import { categoryApi } from 'api';
import PropTypes from 'prop-types';
import storage from 'lib/storage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from 'redux/modules/user';
import Router from '../Routes/Router';
import GlobalStyles from './GlobalStyles';
import Header from './common/Header';
import Store from '../Store/Store';
import Footer from './common/Footer';

import CategoryContext from './CategoryContext';

const Layout = styled.div`
  width: 100%;
  /* 화면 전체에서 헤더와 푸터 높이를 빼줌 */
  min-height: calc(100vh - 220px);
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      logged: false,
      onLogin: this.onLogin,
      onLogout: this.onLogout,
      categoryItems: null,
      error: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.initializeUserInfo();

    this.getCategories();
  }

  initializeUserInfo = async () => {
    const loggedInfo = storage.get('loggedInfo'); // 로그인 정보를 로컬스토리지에서 가져옵니다.
    if (!loggedInfo) return; // 로그인 정보가 없다면 여기서 멈춥니다.

    const { UserActions } = this.props;
    UserActions.setLoggedInfo(loggedInfo);
  };

  // 카테고리 정보를 가져오는 부분
  getCategories = async () => {
    try {
      const { data } = await categoryApi.categoryList();

      this.setState({
        categoryItems: data,
      });
      console.log(`테스트3: ${JSON.stringify(data)}`);
    } catch {
      this.setState({ error: "Can't find category results." });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  // Login Func
  onLogin = () => {
    this.setState({
      logged: true,
    });
  };

  // Logout Func
  onLogout = () => {
    const { history } = this.props;
    this.setState({
      logged: false,
    });

    // Kakao AccessToken Remove
    /* if (provider === 'kakao') {
      window.Kakao.Auth.logout(function logout() {
        console.log('home Kakao Logout');
      });
    } */

    // localStorage Clear
    storage.remove('loggedInfo');
    window.localStorage.clear();
  };

  render() {
    const {
      categoryItems,
      error,
      isLoading,
      logged,
      onLogin,
      onLogout,
    } = this.state;
    const { location } = this.props;
    return (
      <Store.Provider value={this.state}>
        {isLoading ? (
          'Loading...'
        ) : (
          <>
            {console.log(`help: ${JSON.stringify(categoryItems)}`)}
            <CategoryContext.Provider value={categoryItems}>
              <Header location={location} />
              <Layout>
                <Router />
                <GlobalStyles />
              </Layout>
              <Footer />
            </CategoryContext.Provider>
          </>
        )}
      </Store.Provider>
    );
  }
}

App.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  UserActions: PropTypes.shape().isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default connect(null, dispatch => ({
  UserActions: bindActionCreators(userActions, dispatch),
}))(App);
