import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import KakaoLogin from 'react-kakao-login';
import { withRouter } from 'react-router-dom';

const Conatainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-flow: column wrap;
`;

const KakaoButton = styled(KakaoLogin)`
  padding: 0;
  width: 190px;
  height: 44px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
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

    window.sessionStorage.setItem('id', id);
    window.sessionStorage.setItem('name', name);
    window.sessionStorage.setItem('provider', provider);
    onLogin();
    history.push('/');
  };

  render() {
    const { id, name, provider } = this.state;

    return (
      <Conatainer>
        <KakaoButton
          jsKey={process.env.REACT_APP_Kakao}
          buttonText="Kakao"
          onSuccess={this.responseKakao}
          onFailure={this.responseKakao}
          getProfile="true"
        />
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
