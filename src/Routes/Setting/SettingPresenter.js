import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import * as authActions from 'redux/modules/auth';
import * as userActions from 'redux/modules/user';
import { bindActionCreators } from 'redux';
import { isEmail, isLength, isNumeric } from 'validator';
import storage from 'lib/storage';
import debounce from 'lodash/debounce';
import AuthError from 'Components/auth/AuthError';

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
  border-radius: 999px;
`;

const Username = styled.span`
  font-family: Roboto;
  font-size: 28px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  ${marginTop}
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

const InterestingContainer = styled.div`
  width: 500px;
  height: 173px;
  opacity: 0.4;
  border-radius: 10px;
  background-color: #cecece;
  padding: 20px;
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

const Button = styled.button`
  height: 70px;
  width: 30%;
  opacity: 0.8;
  border-radius: 66px;
  box-shadow: 0 0 9px 3px rgba(0, 0, 0, 0.1);
  background-color: #5570ff;
  ${marginTop}
`;

const SettingPresenter = props => {
  // Logout Func
  const { user } = props;
  const userData = user.get('user');
  const history = useHistory();
  const handleLogout = async () => {
    const { UserActions } = props;
    try {
      await UserActions.logout();
    } catch (e) {
      console.log(e);
    }

    storage.remove('loggedInfo');
    window.location.href = '/'; // 홈페이지로 새로고침
  };

  const setError = message => {
    const { AuthActions } = props;
    AuthActions.setError({
      form: 'register',
      message,
    });
  };

  const checkEmailExists = debounce(async email => {
    const { AuthActions } = props;
    try {
      const { data } = await AuthActions.checkEmailExists(email);

      const { exists } = props;
      if (data.length > 0) {
        setError('이미 존재하는 이메일입니다.');
      } else {
        setError(null);
      }
    } catch (e) {
      console.log(e);
    }
  }, 300);

  const validate = {
    email: value => {
      if (!isEmail(value)) {
        setError('잘못된 이메일 형식 입니다.');
        return false;
      }
      setError(null);
      return true;
    },
    nickname: value => {
      if (!isLength(value, { min: 4, max: 15 })) {
        setError('닉네임은 4~15 글자 사이어야 합니다.');
        return false;
      }
      setError(null);
      return true;
    },
    phone: value => {
      if (!isNumeric(value)) {
        setError('잘못된 번호 입니다.');
        return false;
      }
      setError(null);
      return true;
    },
  };

  const handleChange = e => {
    const { AuthActions } = props;
    const { name, value } = e.target;

    AuthActions.changeInput({
      name,
      value,
      form: 'register',
    });

    // 검증작업 진행
    const validation = validate[name](value);

    if (!validation) {
      return; // 비밀번호 검증이거나, 검증 실패하면 여기서 마침
    }

    // TODO: 이메일 중복 확인
    if (name === 'email') {
      if (value !== userData.email) {
        const check = checkEmailExists; // name 에 따라 이메일체크할지 아이디 체크 할지 결정
        check(value);
      }
    }
  };

  const handleModify = async () => {
    const { form, AuthActions, UserActions, error } = props;
    const { email, nickname, imageURL, phone } = form.toJS();

    if (error) return; // 현재 에러가 있는 상태라면 진행하지 않음
    if (
      !validate.email(email) ||
      !validate.nickname(nickname) ||
      !validate.phone(phone)
    ) {
      // 하나라도 실패하면 진행하지 않음
      return;
    }

    console.log(
      `email: ${email} nickname: ${nickname} phone: ${phone} image: ${imageURL}`,
    );
    try {
      const body = {
        email,
        imageURL,
        name: nickname,
        phone,
      };

      await AuthActions.userModify({
        ...body,
      });

      const { result } = props;

      // const { data } = await loginApi.signUp(body);
      console.log(`result: ${result}`);
      const loggedInfo = result;
      storage.set('loggedInfo', loggedInfo);
      UserActions.setLoggedInfo(loggedInfo);

      console.log(`가입 정보1: ${JSON.stringify(loggedInfo)}`);
      console.log(`가입 정보2: ${loggedInfo}`);
      const loggedInfo2 = result.toJS();
      console.log(`가입 정보3: ${loggedInfo2}`);
      // TODO: 로그인 정보 저장 (로컬스토리지/스토어)
      history.goBack(); // 유저 변경 수정시 뒤로가기
    } catch (e) {
      // 에러 처리하기
      console.log(`에러: ${e}`);
      if (e.response.status === 409) {
        const { key } = e.response.data;
        const message = '이미 존재하는 이메일입니다.';

        setError(message);
      }
      setError('알 수 없는 에러가 발생했습니다.');
    }
  };

  const { error } = props;
  const { form } = props;

  const { email, imageURL, nickname, phone } = form.toJS();

  return (
    <Container marginTopValue="80px" marginBottomValue="80px">
      {console.log(`settingUser: ${JSON.stringify(user)}`)}
      {console.log(`settingProps: ${JSON.stringify(props)}`)}
      {console.log(`settingData: ${JSON.stringify(userData)}`)}
      <ProfileContainer marginBottomValue="20px">
        <ProfileImageContainer>
          <ProfileImage src={userData.imageURL} />
          <PencilImage src={pencilImageUrl} />
        </ProfileImageContainer>
        <Username marginTopValue="10px">{userData.name}</Username>
      </ProfileContainer>
      <InfoContainer>
        <Section>
          <Span fontSize="20px" fontopacity="0.8" fontWeight="500">
            닉네임
          </Span>
          <Input
            name="nickname"
            type="text"
            fontopacity="0.8"
            fontWeight="bold"
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
            name="phone"
            placeholder="휴대전화 번호를 입력해주세요"
            type="text"
            fontopacity="0.8"
            fontWeight="bold"
            value={phone}
            onChange={handleChange}
          />
        </Section>
        <InterestingContainer>
          <Span fontopacity="1" fontWeight="bold">
            관심 키워드
          </Span>
        </InterestingContainer>
        {error && <AuthError>{error}</AuthError>}
        <ButtonContainer>
          <Button onClick={handleLogout} marginTopValue="20px">
            <Span fontWeight="900" fontSize="20px">
              로그 아웃
            </Span>
          </Button>

          <Button
            type="button"
            onClick={() => history.goBack()}
            marginTopValue="20px"
          >
            <Span fontWeight="900" fontSize="20px">
              수정 취소
            </Span>
          </Button>
          <Button marginTopValue="20px" onClick={handleModify}>
            <Span fontWeight="900" fontSize="20px">
              수정 완료
            </Span>
          </Button>
        </ButtonContainer>
      </InfoContainer>
    </Container>
  );
};

SettingPresenter.propTypes = {
  form: ImmutablePropTypes.mapContains({
    email: PropTypes.string,
  }).isRequired,
  exists: ImmutablePropTypes.mapContains({
    get: PropTypes.bool,
  }),
  result: ImmutablePropTypes.mapContains({}),
  error: PropTypes.string,

  UserActions: PropTypes.shape().isRequired,
  AuthActions: PropTypes.shape().isRequired,
  user: PropTypes.shape({
    get: PropTypes.func.isRequired,
  }).isRequired,
};

SettingPresenter.defaultProps = {
  exists: ImmutablePropTypes.mapContains({
    get: false,
  }),
  result: ImmutablePropTypes.mapContains({}),
  error: '',
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
    UserActions: bindActionCreators(userActions, dispatch),
  }),
)(SettingPresenter);
