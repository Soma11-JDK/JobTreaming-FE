import React, { PureComponent } from 'react';
import storage from 'lib/storage';
import Store from 'Store/Store';
import LoginContainer from 'Routes/Login/LoginContainer';

const withLogin = WrappedComponent =>
  class IsLogin extends PureComponent {
    render() {
      const loggedInfo = storage.get('loggedInfo'); // 로그인 정보를 로컬스토리지에서 가져옵니다.

      return loggedInfo ? <LoginContainer /> : <WrappedComponent />;
    }
  };

export default withLogin;
