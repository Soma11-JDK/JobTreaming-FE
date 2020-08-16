import React, { PureComponent } from 'react';

import Store from 'Store/Store';
import LoginContainer from 'Routes/Login/LoginContainer';

const withLogin = WrappedComponent =>
  class IsLogin extends PureComponent {
    render() {
      return (
        <Store.Consumer>
          {store => {
            if (store.logged === false) return <LoginContainer />;
            return <WrappedComponent />;
          }}
        </Store.Consumer>
      );
    }
  };

export default withLogin;
