/* eslint-disable global-require */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

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
  display: flex;
  display: -webkit-flex;
  ${marginTop}
`;

const LectureImage = styled.img``;

const QuestionContainer = styled.div`
  flex: 1;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const WriteInfoContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  align-items: center;
  ${marginBottom}
`;

const defaultProfileImg = require('assets/DefaultProfile/DefaultProfile.png');

const ProfileImage = styled.img`
  width: 20px;
  height: 20px;
`;

const Span = styled.span`
  font-size: ${props => props.fontSize};
  opacity: ${props => props.fontopacity};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.fontColor};
  ${marginTop}
  ${marginLeft}
`;

const lectureUrl = require('assets/test1.png');

const Line = styled.div`
  width: 100%;
  height: 0.8px;
  background-color: #000000;
  opacity: 0.4;
  margin-top: 10px;
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
  background-color: #f1f1f1;
  flex: 1;
  padding: 20px;
`;

const Question = () => {
  return (
    <>
      <Container marginTopValue="50px">
        <LectureImage src={lectureUrl} />
        <QuestionContainer>
          <WriteInfoContainer>
            <ProfileImage src={defaultProfileImg} />
            <Span
              fontopacity="0.8"
              fontSize="18px"
              fontWeight="bold"
              fontColor="#000000"
              marginLeftValue="10px"
            >
              eunhye_22
            </Span>
            <Span fontopacity="0.5" fontColor="#000000" marginLeftValue="10px">
              2020.09.28
            </Span>
          </WriteInfoContainer>
          <Span marginTopValue="10px" fontWeight="bold" fontColor="#000000">
            IT 취준생과 현직 개발자를 위한 웹해킹 입문
          </Span>
          <Span marginTopValue="30px" fontWeight="500" fontColor="#000000">
            안녕하세요. 비전공자라 다소 낯선 용어도 많고 이해할수 있을지 걱정이
            많이 되었는데 괜찮을까요? 강의난이도가 어떻게 될지 실무에서도 적용이
            가능한 부분들일지 궁금합니다. 그리고 웹해킹에서 어떤식으로...
          </Span>
        </QuestionContainer>
      </Container>
      <Line />
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
    </>
  );
};

export default Question;
