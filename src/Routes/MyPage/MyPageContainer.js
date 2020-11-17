import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useLocation } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import * as userActions from 'redux/modules/user';
import { bindActionCreators } from 'redux';
import withLogin from 'Components/LoginHOC';
import MyPage from './MyPagePresenter';

const MyPageContainer = props => {
  const params = useParams();
  const location = useLocation();

  const user = useSelector(state => state.user);

  return (
    <MyPage
      param={params.mypagetab}
      state={params.notitab}
      user={user.get('loggedInfo')}
    />
  );
};

export default connect(null, dispatch => ({
  UserActions: bindActionCreators(userActions, dispatch),
}))(withLogin(MyPageContainer));
