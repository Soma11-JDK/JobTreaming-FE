import React from 'react';
import styled, { css } from 'styled-components';

import Subtitle from 'Components/common/Subtitle';
import Tab from 'Components/common/Tab';
import PropTypes from 'prop-types';
import LecturePreview from 'Components/LecturePreview';

import { items } from '../Home/HomePresenter';

const marginTop = css`
  ${({ margintopValue }) => margintopValue && `margin-top : ${margintopValue};`}
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

const TabContainer = styled.div`
  ${marginTop}
`;

const tabInfo = [
  { title: '나의 강의', state: 'mylecture' },
  { title: '찜한 강의', state: 'mylikelecture' },
  { title: '강의 후기', state: 'myreview' },
  { title: '문의/기대평', state: 'myquestion' },
];

const DataContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const SpanContainer = styled.div`
  display: flex;
  ${marginTop}
`;

const Span = styled.span`
  color: ${props => props.textColor};
  font-weight: bold;
  font-size: 28px;
  ${marginLeft}
`;

const LectureViewContainer = styled.div`
  width: 100%;
  height: 100%;
  ${marginTop}
`;

const LectureGird = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const MyLecturePresenter = ({ param }) => {
  return (
    <Container margintopValue="80px" marginBottomValue="80px">
      <ProfileContainer marginBottomValue="20px">
        <ProfileImage src={profileImageUrl} />
        <Username margintopValue="10px">eunhye_22</Username>
      </ProfileContainer>
      <Subtitle title="나의 강의장" />
      <TabContainer margintopValue="20px">
        <Tab tabInfo={tabInfo} nowTab={param} />
      </TabContainer>
      {param === 'mylecture' && (
        <>
          <SpanContainer margintopValue="40px">
            <Span textColor="#000000">오늘의 강의</Span>
            <Span textColor="#465fcc" marginLeftValue="8px">
              (02)
            </Span>
          </SpanContainer>
          <LectureViewContainer margintopValue="20px">
            <LectureGird>
              {items.map(item => {
                const { id, expert, category, endTime, title, url } = item;
                return (
                  <LecturePreview
                    key={id}
                    id={id}
                    imageUrl={url}
                    expert={expert}
                    category={category}
                    endTime={endTime}
                    title={title}
                  />
                );
              })}
            </LectureGird>
          </LectureViewContainer>
          <SpanContainer margintopValue="40px">
            <Span textColor="#000000">수강 예정 강의</Span>
            <Span textColor="#465fcc" marginLeftValue="8px">
              (02)
            </Span>
          </SpanContainer>
          <LectureViewContainer margintopValue="20px">
            <LectureGird>
              {items.map(item => {
                const { id, expert, category, endTime, title, url } = item;
                return (
                  <LecturePreview
                    key={id}
                    id={id}
                    imageUrl={url}
                    expert={expert}
                    category={category}
                    endTime={endTime}
                    title={title}
                  />
                );
              })}
            </LectureGird>
          </LectureViewContainer>
        </>
      )}
      {param === 'mylikelecture' && (
        <>
          <SpanContainer margintopValue="40px">
            <Span textColor="#000000">내가 짬한 강의</Span>
            <Span textColor="#465fcc" marginLeftValue="8px">
              (04)
            </Span>
          </SpanContainer>
        </>
      )}
    </Container>
  );
};

MyLecturePresenter.propTypes = {
  param: PropTypes.string.isRequired,
};
export default MyLecturePresenter;
