import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import KakaoLogin from 'react-kakao-login';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'redux/modules/auth';
import axios from 'axios';
import { loginApi } from 'api';
import storage from 'lib/storage';
import * as userActions from 'redux/modules/user';

const marginTop = css`
  ${({ marginTopValue }) => marginTopValue && `margin-top : ${marginTopValue};`}
`;

const marginBottom = css`
  ${({ marginBottomValue }) =>
    marginBottomValue && `margin-bottom : ${marginBottomValue};`}
`;

const marginRight = css`
  ${({ marginRightValue }) =>
    marginRightValue && `margin-right : ${marginRightValue};`}
`;

const marginLeft = css`
  ${({ marginLeftValue }) =>
    marginLeftValue && `margin-left : ${marginLeftValue};`}
`;

const Conatainer = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-flow: column wrap;
`;

const TestLoginButton = styled.button`
  padding: 0;
  max-width: 500px;
  width: 50%;
  height: 70px;
  margin-top: 20px;
  line-height: 44px;
  color: black;
  background-color: lightgray;
  border: 1px solid transparent;
  border-radius: 66px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
`;

const KakaoButton = styled(KakaoLogin)`
  padding: 0;
  max-width: 500px;
  width: 50%;
  height: 70px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 66px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  ${marginTop}
`;

const Span = styled.span`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  opacity: ${props => props.fontopacity};
  color: ${props => props.fontColor};
  word-break: keep-all;
  ${marginTop}
  ${marginBottom}
  ${marginLeft}
`;

const defaultProfileImg = require('assets/DefaultProfile/DefaultProfile.png');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      username: '',
      provider: '',
      token: '',
      profileImage: '',
      email: '',
      phone: '',
    };
  }

  // Test Expert Login
  handleTestExpertLogin = async () => {
    try {
      const { onLogin, history, UserActions, AuthActions } = this.props;
      const { data } = await loginApi.socialLogin('test@test.test');

      data.user.imageURL =
        data.user.imageURL === ' ' ? defaultProfileImg : data.user.imagerURL;

      this.setState({
        id: data.user.id,
        username: data.user.name,
        phone: data.user.phone,
        profileImage: data.user.imageURL,
        email: data.user.email,
      });

      const { id, username, phone, profileImage, email } = this.state;

      AuthActions.changeInput({
        name: 'email',
        value: email,
        form: 'register',
      });
      AuthActions.changeInput({
        name: 'nickname',
        value: username,
        form: 'register',
      });
      AuthActions.changeInput({
        name: 'imageURL',
        value: profileImage,
        form: 'register',
      });
      AuthActions.changeInput({
        name: 'phone',
        value: phone,
        form: 'register',
      });
      // console.log(`테스트 로그인 ${data}`);
      storage.set('loggedInfo', data);
      UserActions.setLoggedInfo(data);

      onLogin();
      history.push('/');
    } catch {
      console.log('로그인 에러입니다.');
    }
  };

  // Test User Login
  handleTestUserLogin = async () => {
    try {
      const { onLogin, history, UserActions, AuthActions } = this.props;
      const { data } = await loginApi.socialLogin('test1@test.test');

      data.user.imageURL =
        data.user.imageURL === ' ' ? defaultProfileImg : data.user.imagerURL;
      // console.log(`테스트 로그인 ${data}`);

      this.setState({
        id: data.user.id,
        username: data.user.name,
        phone: data.user.phone,
        profileImage: data.user.imageURL,
        email: data.user.email,
      });

      const { id, username, phone, profileImage, email } = this.state;

      AuthActions.changeInput({
        name: 'email',
        value: email,
        form: 'register',
      });
      AuthActions.changeInput({
        name: 'nickname',
        value: username,
        form: 'register',
      });
      AuthActions.changeInput({
        name: 'imageURL',
        value: profileImage,
        form: 'register',
      });
      AuthActions.changeInput({
        name: 'phone',
        value: phone,
        form: 'register',
      });
      storage.set('loggedInfo', data);
      UserActions.setLoggedInfo(data);

      onLogin();
      history.push('/');
    } catch {
      console.log('로그인 에러입니다.');
    }
  };

  // Kakao Login
  responseKakao = async res => {
    this.setState({
      id: res.profile.id,
      username: res.profile.properties.nickname,
      profileImage: res.profile.properties.profile_image,
      provider: 'kakao',
      email: res.profile.kakao_account.email,
    });

    const { id, username, provider, profileImage, email } = this.state;
    const { AuthActions, UserActions } = this.props;

    AuthActions.changeInput({
      name: 'email',
      value: email,
      form: 'register',
    });
    AuthActions.changeInput({
      name: 'nickname',
      value: username,
      form: 'register',
    });
    AuthActions.changeInput({
      name: 'imageURL',
      value: profileImage,
      form: 'register',
    });
    try {
      const { data } = await loginApi.socialLogin(email);

      const { history, onLogin } = this.props;

      storage.set('loggedInfo', data);
      UserActions.setLoggedInfo(data);

      onLogin();
      history.push('/');
    } catch {
      console.log('회원 정보가 없습니다.');
      this.doSignUp();
    }
  };

  // Login Fail
  responseFail = err => {
    console.error(err);
  };

  // 로그인 정보 저장
  // TODO 로그인 정보를 계속 저장하는게 맞는건지?
  doSignUp = () => {
    console.log('카카오 로그인 성공입니다.');
    const { history } = this.props;
    history.push('/register');
  };

  render() {
    const {
      id,
      username,
      provider,
      token,
      profileImage,
      email,
      phone,
    } = this.state;

    const { handleTestExpertLogin, handleTestUserLogin } = this;

    return (
      <Conatainer>
        <Span
          marginTopValue="40px"
          fontSize="30px"
          fontWeight="bold"
          fontColor="#000000"
        >
          로그인
        </Span>
        <KakaoButton
          jsKey={process.env.REACT_APP_Kakao}
          buttonText="카카오로 로그인하기"
          onSuccess={this.responseKakao}
          onFailure={this.responseFail}
          getProfile="true"
          marginTopValue="60px"
        />
        <TestLoginButton onClick={handleTestExpertLogin}>
          테스트 전문가 로그인
        </TestLoginButton>
        <TestLoginButton onClick={handleTestUserLogin}>
          테스트 사용자 로그인
        </TestLoginButton>
      </Conatainer>
    );
  }
}

Login.propTypes = {
  AuthActions: PropTypes.shape().isRequired,
  UserActions: PropTypes.shape().isRequired,
  onLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(
  state => ({
    form: state.auth.getIn(['register', 'form']),
    error: state.auth.getIn(['register', 'error']),
    exists: state.auth.getIn(['register', 'exists']),
  }),
  dispatch => ({
    AuthActions: bindActionCreators(authActions, dispatch),
    UserActions: bindActionCreators(userActions, dispatch),
  }),
)(withRouter(Login));
