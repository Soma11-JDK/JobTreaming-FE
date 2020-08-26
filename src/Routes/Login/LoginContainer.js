import React from 'react';

import Store from '../../Store/Store';
import Login from './LoginPresenter';

const LoginContainer = () => {
  return (
    <Store.Consumer>
      {store => <Login onLogin={store.onLogin} />}
    </Store.Consumer>
  );
};

export default LoginContainer;
