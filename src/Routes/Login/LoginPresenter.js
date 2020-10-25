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
      name: '',
      provider: '',
    };
  }

  // Test Login
  handleTestLogin = async () => {
    try {
      const { history } = this.props;
      await loginApi.socialLogin();
      console.log('로그인 성공입니다.');
      this.setState({
        id: 'test',
        name: 'test',
        provider: 'test',
      });
      this.doSignUp();
    } catch {
      console.log('로그인 에러입니다.');
    }
  };

  // Kakao Login
  responseKakao = res => {
    this.setState({
      id: res.profile.id,
      name: res.profile.properties.nickname,
      provider: 'kakao',
    });
    this.doSignUp();
  };

  // Login Fail
  responseFail = err => {
    console.error(err);
  };

  // 로그인 정보 저장
  doSignUp = () => {
    const { onLogin, history } = this.props;
    const { id, name, provider } = this.state;

    window.localStorage.setItem('id', id);
    window.localStorage.setItem('name', name);
    window.localStorage.setItem('provider', provider);
    onLogin();
    history.push('/');
  };

  render() {
    const { id, name, provider } = this.state;
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
