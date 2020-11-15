import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import KakaoLogin from 'react-kakao-login';
import { withRouter } from 'react-router-dom';

import { loginApi } from 'api';

const Conatainer = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-flow: column wrap;
`;

const TestLoginButton = styled.button`
  padding: 0;
  width: 190px;
  height: 44px;
  margin-top: 20px;
  line-height: 44px;
  color: black;
  background-color: lightgray;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
`;

const KakaoButton = styled(KakaoLogin)`
  padding: 0;
  width: 190px;
  height: 44px;
  margin-top: 20px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
`;

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
    };
  }

  // Test Login
  handleTestLogin = async () => {
    try {
      const { history } = this.props;
      await loginApi.testLogin();
      console.log('로그인 성공입니다.');
      this.setState({
        id: 'test',
        username: 'test',
        provider: 'test',
      });
      this.doSignUp();
    } catch {
      console.log('로그인 에러입니다.');
    }
  };

  // Kakao Login
  responseKakao = async res => {
    console.log(`kakao: ${JSON.stringify(res)}`);

    this.setState({
      id: res.profile.id,
      username: res.profile.properties.nickname,
      profileImage: res.profile.properties.profile_image,
      provider: 'kakao',
      email: res.profile.kakao_account.email,
    });

    const { id, username, provider, profileImage, email } = this.state;

    try {
      const { data } = await loginApi.socialLogin(email);
      console.log(`kakao data: ${data}`);
      const { onLogin } = this.props;

      onLogin();
      window.localStorage.setItem('id', id);
      window.localStorage.setItem('username', username);
      window.localStorage.setItem('provider', provider);
      window.localStorage.setItem('profileImage', profileImage);
      window.localStorage.setItem('email', email);
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
    const { id, username, provider, token, profileImage, email } = this.state;

    const { handleTestLogin } = this;

    return (
      <Conatainer>
        <KakaoButton
          jsKey={process.env.REACT_APP_Kakao}
          buttonText="Kakao"
          onSuccess={this.responseKakao}
          onFailure={this.responseFail}
          getProfile="true"
        />
        <TestLoginButton onClick={handleTestLogin}>
          테스트 로그인
        </TestLoginButton>
      </Conatainer>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
export default withRouter(Login);
