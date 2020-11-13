import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

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

const SettingPresenter = ({ store }) => {
  // Logout Func
  const history = useHistory();
  function onLogout() {
    history.push('/');
    store.onLogout();
  }

  return (
    <Container marginTopValue="80px" marginBottomValue="80px">
      {console.log(`store: ${JSON.stringify(store)}`)}
      <ProfileContainer marginBottomValue="20px">
        <ProfileImageContainer>
          <ProfileImage src={profileImageUrl} />
          <PencilImage src={pencilImageUrl} />
        </ProfileImageContainer>
        <Username marginTopValue="10px">eunhye_22</Username>
      </ProfileContainer>
      <InfoContainer>
        <Section>
          <Span fontSize="20px" fontopacity="0.8" fontWeight="500">
            회원이름
          </Span>
          <Input type="text" fontopacity="0.8" fontWeight="bold" />
        </Section>
        <Section>
          <Span fontSize="20px" fontopacity="0.8" fontWeight="500">
            닉네임
          </Span>
          <Input type="text" fontopacity="0.8" fontWeight="bold" />
        </Section>
        <Section>
          <Span fontSize="20px" fontopacity="0.8" fontWeight="500">
            이메일
          </Span>
          <Input
            placeholder="이메일을 입력해주세요."
            type="text"
            fontopacity="0.8"
            fontWeight="bold"
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
          />
        </Section>
        <InterestingContainer>
          <Span fontopacity="1" fontWeight="bold">
            관심 키워드
          </Span>
        </InterestingContainer>
        <ButtonContainer>
          <Button onClick={onLogout} marginTopValue="20px">
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
          <Button marginTopValue="20px">
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
  store: PropTypes.objectOf(
    PropTypes.shape({
      onLogout: PropTypes.func.isRequired,
    }),
  ).isRequired,
};

export default SettingPresenter;
