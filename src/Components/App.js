import React, { Component } from 'react';
import styled from 'styled-components';
import Router from '../Routes/Router';
import GlobalStyles from './GlobalStyles';

import Header from './Header';
import Store from '../Store/Store';
import Footer from './Footer';

const Layout = styled.div`
  display: flex;
  width: 100%;
  /* 화면 전체에서 헤더와 푸터 높이를 빼줌 */
  min-height: calc(100vh - 220px);
`;

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      logged: false,
      onLogin: this.onLogin,
      onLogout: this.onLogout,
    };
  }

  componentDidMount() {
    const id = window.localStorage.getItem('id');
    if (id) {
      this.onLogin();
    } else {
      this.onLogout();
    }
  }

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
    if (provider === 'kakao') {
      window.Kakao.Auth.logout(function logout() {
        console.log('Kakao Logout');
      });
    }

    // localStorage Clear
    window.localStorage.clear();
  };

  render() {
    const { logged, onLogin, onLogout } = this.state;
    return (
      <Store.Provider value={this.state}>
        <Header logged={logged} onLogout={onLogout} />
        <Layout>
          <Router />
          <GlobalStyles />
        </Layout>
        <Footer />
      </Store.Provider>
    );
  }
}

export default App;
