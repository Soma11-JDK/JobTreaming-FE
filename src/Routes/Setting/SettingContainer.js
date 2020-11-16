import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Store from 'Store/Store';
import Setting from './SettingPresenter';

const MyPageContainer = props => {
  const params = useParams();
  const location = useLocation();

  return (
    <Store.Consumer>
      {store => <Setting onLogout={store.onLogout} />}
    </Store.Consumer>
  );
};

export default MyPageContainer;
