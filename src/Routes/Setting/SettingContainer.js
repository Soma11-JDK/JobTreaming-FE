import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Store from 'Store/Store';
import { connect, useSelector } from 'react-redux';
import * as userActions from 'redux/modules/user';
import { bindActionCreators } from 'redux';
import withLogin from 'Components/LoginHOC';
import Setting from './SettingPresenter';

const SettingContainer = props => {
  const params = useParams();
  const location = useLocation();

  const user = useSelector(state => state.user);

  return <Setting user={user.get('loggedInfo')} />;
};

export default connect(null, dispatch => ({
  UserActions: bindActionCreators(userActions, dispatch),
}))(withLogin(SettingContainer));
