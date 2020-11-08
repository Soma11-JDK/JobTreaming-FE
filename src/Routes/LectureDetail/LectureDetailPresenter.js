import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';

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

const Container = styled.div`
  display: flex;
  display: -webkit-flex;
  width: 100%;
  padding: 0 10%;
  ${marginTop}
`;

const LeftContainer = styled.div`
  flex: 0.7;

  ${marginRight}
`;

const RightContainer = styled.div`
  flex: 0.3;
  background-color: blue;
`;

const TutorContainer = styled.div`
  width: 100%;
  background-color: #f7ebff;
  border-radius: 10px;
  object-fit: contain;
  display: flex;
  display: -webkit-flex;
  padding: 40px 20px 0 20px;
`;

const tutorImageUrl = require('assets/TestTutor/Tutor.png');

const TutorImage = styled.img`
  width: 50%;
  height: 50%;
`;

const TutorInfoContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Span = styled.span`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  opacity: ${props => props.fontOpacity};
  color: ${props => props.color};
  word-break: keep-all;
  ${marginTop}
`;

const TabContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  width: 80%;
  display: flex;
`;

const Item = styled.li`
  width: 200px;
  height: 50px;
  text-align: center;
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled.a`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid ${props => props.color};
  opacity: ${props => props.fontOpacity};
`;

const tabInfo = [
  { id: 0, title: '강의 소개', anchor: 'lecureintroduce' },
  { id: 1, title: '튜터 소개', anchor: 'tutorintroduce' },
  { id: 2, title: '수강생 후기', anchor: 'review' },
  { id: 3, title: '문의/기대평', anchor: 'question' },
];

const Section = styled.section`
  width: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  ${marginTop}
  ${marginBottom}
`;

const Line = styled.div`
  width: 100%;
  height: 0.8px;
  opacity: 0.8;
  background-color: #000000;
  ${marginTop}
`;

const LectureDetailPresenter = ({ location }) => {
  const [tabTitle, setTabTitle] = useState('lecureintroduce');

  const handleClick = anchor => {
    return setTabTitle(anchor);
  };

  return (
    <Container marginTopValue="80px">
      <LeftContainer marginRightValue="30px">
        <TutorContainer>
          <TutorImage marginTop="50px" src={tutorImageUrl} />
          <TutorInfoContainer>
            <Span fontWeight="bold" fontSize="2vw">
              직장인을 위한 실용 파이썬 첫 걸음을 향해
            </Span>
            <Span fontSize="1.5vw" fontWeight="500">
              정보통신 . 이은아 멘토
            </Span>
            <Span fontSize="1.8vw" fontWeight="500">
              튜터 프로필 {'>'}
            </Span>
          </TutorInfoContainer>
        </TutorContainer>
        <TabContainer>
          <List>
            {tabInfo.map(info => {
              const { id, title, anchor } = info;

              return (
                <Item key={id} onClick={() => handleClick(anchor)}>
                  <SLink
                    as={HashLink}
                    color={tabTitle === anchor ? '#3918ff' : '#000000'}
                    fontOpacity={tabTitle === anchor ? '1' : '0.4'}
                    to={`${location.pathname}#${anchor}`}
                  >
                    <Span
                      fontSize="22px"
                      fontWeight="normal"
                      current={tabTitle === anchor ? 1 : 0}
                      color={tabTitle === anchor ? '#3918ff' : '#000000'}
                      fontOpacity={tabTitle === anchor ? '1' : '0.5'}
                    >
                      {title}
                    </Span>
                  </SLink>
                </Item>
              );
            })}
          </List>
        </TabContainer>
        <Section id={tabInfo[0].anchor} marginTopValue="80px">
          <Span current fontWeight="bold" fontSize="28px">
            강의 소개
          </Span>
          <Line marginTopValue="5px" />
        </Section>
        <Section marginTopValue="80px">
          <Span fontWeight="bold" fontSize="28px">
            강의 내용
          </Span>
          <Line marginTopValue="5px" />
        </Section>
        <Section id={tabInfo[1].anchor} marginTopValue="80px">
          <Span fontWeight="bold" fontSize="28px">
            튜터 소개
          </Span>
          <Line marginTopValue="5px" />
        </Section>
        <Section id={tabInfo[2].anchor} marginTopValue="80px">
          <Span fontWeight="bold" fontSize="28px">
            수강생 후기
          </Span>
          <Line marginTopValue="5px" />
        </Section>
        <Section id={tabInfo[3].anchor} marginTopValue="80px">
          <Span fontWeight="bold" fontSize="28px">
            문의/기대평{' '}
          </Span>
          <Line marginTopValue="5px" />
        </Section>
      </LeftContainer>
      <RightContainer />
    </Container>
  );
};

LectureDetailPresenter.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default LectureDetailPresenter;
