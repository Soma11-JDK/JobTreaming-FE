import React, { Component } from 'react';
import styled from 'styled-components';
import { categoryApi } from 'api';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
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
    const id = window.localStorage.getItem('id');
    if (id) {
      this.onLogin();
    } else {
      this.onLogout();
    }
    this.getCategories();
  }

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
    this.setState({
      logged: false,
    });
    const provider = window.localStorage.getItem('provider');

    // Kakao AccessToken Remove
    /* if (provider === 'kakao') {
      window.Kakao.Auth.logout(function logout() {
        console.log('home Kakao Logout');
      });
    } */

    // localStorage Clear
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
    return (
      <Store.Provider value={this.state}>
        {isLoading ? (
          'Loading...'
        ) : (
          <>
            {console.log(`help: ${JSON.stringify(categoryItems)}`)}
            <CategoryContext.Provider value={categoryItems}>
              <Header logged={logged} onLogout={onLogout} />
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

export default App;
