import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActions from 'redux/modules/user';
import { bindActionCreators } from 'redux';
import withLogin from 'Components/LoginHOC';
import MyPage from './MyPagePresenter';

const MyPageContainer = props => {
  const { user } = props;
  const params = useParams();
  const location = useLocation();
  console.log(`location: ${JSON.stringify(location)}`);
  console.log(`params: ${JSON.stringify(params.notitab)}`);
  console.log(`mypage${params.mypagetab}`);
  console.log(`mypage2${params.notitab}`);

  return (
    <MyPage
      param={params.mypagetab}
      state={params.notitab}
      user={user.get('loggedInfo')}
    />
  );
};

MyPageContainer.propTypes = {
  user: PropTypes.shape({
    get: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(
  state => ({
    user: state.user,
  }),
  dispatch => ({
    UserActions: bindActionCreators(userActions, dispatch),
  }),
)(withLogin(MyPageContainer));
