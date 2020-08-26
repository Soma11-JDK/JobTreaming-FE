import React, { Component } from 'react';
import styled from 'styled-components';
import Router from '../Routes/Router';
import GlobalStyles from './GlobalStyles';

import Header from './Header';
import Store from '../Store/Store';

const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
`;

const Content = styled.div`
  margin: 0 auto;
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      onLogin: this.onLogin,
      onLogout: this.onLogout,
    };
  }

  componentDidMount() {
    const id = window.sessionStorage.getItem('id');
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

    const provider = window.sessionStorage.getItem('provider');

    // Kakao AccessToken Remove
    if (provider === 'kakao') {
      window.Kakao.Auth.logout(function logout() {
        console.log('Kakao Logout');
      });
    }

    // SessionStorage Clear
    window.sessionStorage.clear();
  };

  render() {
    const { logged, onLogin, onLogout } = this.state;
    return (
      <Store.Provider value={this.state}>
        <Layout>
          <Header logged={logged} onLogout={onLogout} />
          <Router />
          <GlobalStyles />
        </Layout>
      </Store.Provider>
    );
  }
}

export default App;
