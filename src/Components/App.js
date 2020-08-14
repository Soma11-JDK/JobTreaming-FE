/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';
import Router from '../Routes/Router';
import GlobalStyles from './GlobalStyles';

import Header from './Header';
import Store from '../Store/Store';

const Layout = styled.div`
  margin: 0 auto;
  display: fex;
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
  };

  render() {
    const { logged, onLogin, onLogout } = this.state;
    return (
      <Layout>
        <Store.Provider value={this.state}>
          <Header logged={logged} onLogout={onLogout} />
          <Content>
            <Router />
          </Content>
          <GlobalStyles />
        </Store.Provider>
      </Layout>
    );
  }
}

export default App;
