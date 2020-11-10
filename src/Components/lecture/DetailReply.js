import React from 'react';
import styled, { css } from 'styled-components';

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

const marginRight = css`
  ${({ marginRightValue }) =>
    marginRightValue && `margin-right : ${marginRightValue};`}
`;

const padding = css`
  ${({ paddingValue }) => paddingValue && `padding : ${paddingValue}`}
`;

const QuestionContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  border-radius: 30px;
  background-color: #f1f1f1;
  align-items: center;
  width: 100%;
  ${marginTop}
  ${padding}
`;

const QuestionViewContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  width: 100%;
  ${marginLeft}
`;

const WriteInfoContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  align-items: center;
  width: 100%;
  ${marginBottom}
`;

const defaultProfileImg = require('assets/DefaultProfile/DefaultProfile.png');

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
`;

const Span = styled.span`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  opacity: ${props => props.fontopacity};
  color: ${props => props.fontColor};
  word-break: keep-all;
  ${marginTop}
  ${marginLeft}
  ${padding}
`;

const replyUrl = require('assets/Reply/Reply.png');

const ReplyContainer = styled.div`
  padding-left: 50px;
  display: flex;
  display: -webkit-flex;
  ${marginTop}
`;

const ReplyImage = styled.img`
  width: 15px;
  height: 15px;
`;

const AnswerContainer = styled.div`
  border-radius: 30px;
  flex: 1;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  display: -webkit-flex;
  align-items: center;
  width: 100%;
  padding: 21px 24px 20px;
  border-radius: 39px;
  border: solid 1px #000000;
  ${marginTop}
`;

const Input = styled.input`
  all: unset;
  opacity: 0.8;
  color: #000000;
  font-size: 16px;
  width: 100%;
  ${marginLeft}
`;

const Line = styled.div`
  width: 100%;
  height: 0.8px;
  opacity: 0.8;
  background-color: #000000;
  ${marginTop}
`;

const DetailReply = () => {
  return (
    <>
      <QuestionContainer marginTopValue="20px" paddingValue="10px">
        <ProfileImage src={defaultProfileImg} />
        <QuestionViewContainer marginLeftValue="10px">
          <WriteInfoContainer>
            <Span
              fontopacity="0.8"
              fontSize="18px"
              fontWeight="bold"
              fontColor="#000000"
            >
              eunhye_22
            </Span>
            <Span fontopacity="0.5" fontColor="#000000" marginLeftValue="10px">
              2020.09.28
            </Span>
          </WriteInfoContainer>
          <Span marginTopValue="20px" fontSize="16px">
            컴퓨터 인터넷만 할줄아는 회사원입니다. 프로그래밍이라는걸
            배워보고싶은데 저같은 초보도 가능할까요? 냉정하게 조언부탁드립니다.
            이쪽분야로 도전하고싶어요.
          </Span>
        </QuestionViewContainer>
      </QuestionContainer>
      <ReplyContainer marginTopValue="10px">
        <ReplyImage src={replyUrl} />
        <AnswerContainer>
          <WriteInfoContainer marginBottomValue="10px">
            <ProfileImage src={defaultProfileImg} />
            <Span
              fontopacity="0.8"
              fontSize="18px"
              fontWeight="bold"
              fontColor="#5570ff"
              marginLeftValue="10px"
            >
              문준식 튜터
            </Span>
            <Span fontopacity="0.5" fontColor="#000000" marginLeftValue="10px">
              2020.09.28
            </Span>
          </WriteInfoContainer>
          <Span fontWeight="500" fontColor="#000000">
            안녕하세요. eunhye_22님. 우선 수업 대상은 웹해킹을 처음 접해보는
            사람을 대상으로 하고 있습니다! 다만 주의하실 점은 코딩을 직접 치지는
            않고 방향을 잡아드리는 데 집중하고 있습니다. 참고 바라겠습니다. :)
          </Span>
        </AnswerContainer>
      </ReplyContainer>
      <Form>
        <ReplyImage src={replyUrl} />
        <Input marginLeftValue="10px" placeholder="댓글 달기" />
        <Span fontopacity="0.8" fontWeight="bold">
          등록
        </Span>
      </Form>
      <Line marginTopValue="20px" />
    </>
  );
};

export default DetailReply;
