import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'redux/modules/auth';
import ImmutablePropTypes from 'react-immutable-proptypes';
import CustomSingleDate from 'Components/common/CustomSingleDate';
import { isEmail, isLength, isNumeric } from 'validator';
import AuthError from 'Components/auth/AuthError';
import debounce from 'lodash/debounce';

const marginTop = css`
  ${({ marginTopValue }) => marginTopValue && `margin-top : ${marginTopValue};`}
`;

const marginBottom = css`
  ${({ marginBottomValue }) =>
    marginBottomValue && `margin-bottom : ${marginBottomValue};`}
`;

const marginLeft = css`
  ${({ marginLeftValue }) =>
    marginLeftValue && `margin-left : ${marginLeftValue};`}
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  padding: 0px 80px;
  ${marginTop}
`;

const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${marginBottom}
`;

const profileImageUrl = require('assets/TestProfile/Mask Group.png');

const ProfileImageContainer = styled.div`
  position: relative;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 999px;
`;

const pencilImageUrl = require('assets/Pencil/Pencil.png');

const PencilImage = styled.img`
  width: 30px;
  position: absolute;
  bottom: 0px;
  right: -10px;
  background-color: #465fcc;
  padding: 6px;
  border-radius: 999px;
`;

const InfoContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Section = styled.section`
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  width: 500px;
`;

const Span = styled.span`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  opacity: ${props => props.fontopacity};
  color: #000000;
  word-break: keep-all;
  ${marginTop}
  ${marginBottom}
  ${marginLeft}
`;

const Input = styled.input`
  opacity: ${props => props.fontopacity};
  font-weight: ${props => props.fontWeight};
  border-radius: 66px;
  border: solid 2px #000000;
  width: 500px;
  margin: 20px 0;
  font-size: 20px;
  padding: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  width: 500px;
`;

const DateContainer = styled.div`
  width: 500px;
  ${marginTop}
  ${marginBottom}
`;

const Button = styled.button`
  height: 70px;
  width: 100%;
  opacity: 0.8;
  border-radius: 66px;
  box-shadow: 0 0 9px 3px rgba(0, 0, 0, 0.1);
  background-color: #5570ff;
  ${marginTop}
`;
class RegisterPresenter extends Component {
  validate = {
    email: value => {
      if (!isEmail(value)) {
        this.setError('잘못된 이메일 형식 입니다.');
        return false;
      }
      this.setError(null);
      return true;
    },
    nickname: value => {
      if (!isLength(value, { min: 4, max: 15 })) {
        this.setError('닉네임은 4~15 글자 사이어야 합니다.');
        return false;
      }
      this.setError(null);
      return true;
    },
    phone: value => {
      if (!isNumeric(value)) {
        this.setError('잘못된 번호 입니다.');
        return false;
      }
      this.setError(null);
      return true;
    },
  };

  checkEmailExists = debounce(async email => {
    const { AuthActions } = this.props;
    try {
      const { data } = await AuthActions.checkEmailExists(email);

      const { exists } = this.props;
      if (data.length > 0) {
        this.setError('이미 존재하는 이메일입니다.');
      } else {
        this.setError(null);
      }
    } catch (e) {
      console.log(e);
    }
  }, 300);

  componentWillUnmount() {
    const { AuthActions } = this.props;
    AuthActions.initializeForm('register');
  }

  setError = message => {
    const { AuthActions } = this.props;
    AuthActions.setError({
      form: 'register',
      message,
    });
  };

  handleChange = e => {
    const { AuthActions } = this.props;
    const { name, value } = e.target;

    AuthActions.changeInput({
      name,
      value,
      form: 'register',
    });

    // 검증작업 진행
    const validation = this.validate[name](value);

    if (!validation) {
      return; // 비밀번호 검증이거나, 검증 실패하면 여기서 마침
    }

    // TODO: 이메일 중복 확인
    if (name === 'email') {
      const check = this.checkEmailExists; // name 에 따라 이메일체크할지 아이디 체크 할지 결정
      check(value);
    }
  };

  handleRegister = async () => {
    const { form, AuthActions, error, imageURL, history } = this.props;
    const { email, nickname, phone } = form.toJS();

    const { validate } = this;

    if (error) return; // 현재 에러가 있는 상태라면 진행하지 않음
    if (
      !validate.email(email) ||
      !validate.nickname(nickname) ||
      !validate.phone(phone)
    ) {
      // 하나라도 실패하면 진행하지 않음
    }

    console.log(
      `email: ${email} nickname: ${nickname} phone: ${phone} image: ${imageURL}`,
    );
    try {
      await AuthActions.serverRegister({
        email,
        imageURL,
        nickname,
        phone,
      });
      const { result } = this.props;
      const loggedInfo = result.toJS();
      console.log(`가입 정보: ${loggedInfo}`);
      // TODO: 로그인 정보 저장 (로컬스토리지/스토어)
      history.push('/'); // 회원가입 성공시 홈페이지로 이동
    } catch (e) {
      // 에러 처리하기
      console.log(`에러: ${e}`);
      if (e.response.status === 409) {
        const { key } = e.response.data;
        const message = '이미 존재하는 이메일입니다.';

        this.setError(message);
      }
      this.setError('알 수 없는 에러가 발생했습니다.');
    }
  };

  render() {
    const { error } = this.props;
    const { form } = this.props;
    const { imageURL } = this.props;
    const { email, nickname, phone } = form.toJS();

    const { handleChange, handleRegister } = this;

    return (
      <Container marginTopValue="80px" marginBottomValue="80px">
        <ProfileContainer marginBottomValue="20px">
          <ProfileImageContainer>
            <ProfileImage src={imageURL} />
            <PencilImage src={pencilImageUrl} />
          </ProfileImageContainer>
        </ProfileContainer>
        <InfoContainer>
          <Section>
            <Span fontSize="20px" fontopacity="0.8" fontWeight="500">
              닉네임
            </Span>
            <Input
              type="text"
              fontopacity="0.8"
              fontWeight="bold"
              name="nickname"
              value={nickname}
              onChange={handleChange}
            />
          </Section>
          <Section>
            <Span fontSize="20px" fontopacity="0.8" fontWeight="500">
              이메일
            </Span>
            <Input
              name="email"
              placeholder="이메일을 입력해주세요."
              type="text"
              fontopacity="0.8"
              fontWeight="bold"
              value={email}
              onChange={handleChange}
            />
          </Section>
          <Section>
            <Span fontSize="20px" fontopacity="0.8" fontWeight="500">
              휴대전화 번호
            </Span>
            <Input
              placeholder="휴대전화 번호를 입력해주세요"
              type="text"
              fontopacity="0.8"
              fontWeight="bold"
              name="phone"
              value={phone}
              onChange={handleChange}
            />
          </Section>
          {error && <AuthError>{error}</AuthError>}
          <ButtonContainer>
            <Button onClick={handleRegister} marginTopValue="20px">
              <Span fontWeight="900" fontSize="20px">
                회원 가입
              </Span>
            </Button>
          </ButtonContainer>
        </InfoContainer>
      </Container>
    );
  }
}

RegisterPresenter.propTypes = {
  AuthActions: PropTypes.shape().isRequired,
  form: ImmutablePropTypes.mapContains({
    email: PropTypes.string,
  }),
  exists: ImmutablePropTypes.mapContains({
    get: PropTypes.bool,
  }),
  result: ImmutablePropTypes.mapContains({}),
  error: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  imageURL: PropTypes.string,
};

const defaultProfileImg = require('assets/DefaultProfile/DefaultProfile.png');

RegisterPresenter.defaultProps = {
  form: ImmutablePropTypes.mapContains({
    email: '',
  }),
  result: ImmutablePropTypes.mapContains({}),
  exists: ImmutablePropTypes.mapContains({
    get: false,
  }),
  error: '',
  imageURL: defaultProfileImg,
};

export default connect(
  state => ({
    form: state.auth.getIn(['register', 'form']),
    error: state.auth.getIn(['register', 'error']),
    exists: state.auth.getIn(['register', 'exists']),
    result: state.auth.get('result'),
  }),
  dispatch => ({
    AuthActions: bindActionCreators(authActions, dispatch),
  }),
)(RegisterPresenter);
