import React, { PureComponent } from 'react';
import storage from 'lib/storage';
import Store from 'Store/Store';
import LoginContainer from 'Routes/Login/LoginContainer';
import PropTypes from 'prop-types';
import { connect, useSelector, useDispatch, shallowEqual } from 'react-redux';
import * as userActions from 'redux/modules/user';
import { bindActionCreators } from 'redux';

const withLogin = WrappedComponent =>
  class IsLogin extends PureComponent {
    render() {
      const loggedInfo = storage.get('loggedInfo'); // 로그인 정보를 로컬스토리지에서 가져옵니다.

      console.log(`loggedInfo: ${loggedInfo}`);
      return !loggedInfo ? <LoginContainer /> : <WrappedComponent />;
    }
  };

export default withLogin;
