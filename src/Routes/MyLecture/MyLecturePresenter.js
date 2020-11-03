import React from 'react';
import styled, { css } from 'styled-components';

import Subtitle from 'Components/common/Subtitle';
import Tab from 'Components/common/Tab';
import PropTypes from 'prop-types';
import LecturePreview from 'Components/LecturePreview';

import HorizontalLecture from 'Components/HorizontalLecture';

import { items } from '../Home/HomePresenter';

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
  ${marginBottom}
`;

const LectureGird = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const MyLecturePresenter = ({ param }) => {
  return (
    <Container marginTopValue="80px" marginBottomValue="80px">
      <ProfileContainer marginBottomValue="20px">
        <ProfileImage src={profileImageUrl} />
        <Username marginTopValue="10px">eunhye_22</Username>
      </ProfileContainer>
      <Subtitle title="나의 강의장" />
      <TabContainer marginTopValue="20px">
        <Tab tabInfo={tabInfo} nowTab={param} />
      </TabContainer>
      {param === 'mylecture' && (
        <>
          <SpanContainer marginTopValue="40px">
            <Span textColor="#000000">오늘의 강의</Span>
            <Span textColor="#465fcc" marginLeftValue="8px">
              (02)
            </Span>
          </SpanContainer>
          <LectureViewContainer marginTopValue="20px">
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
          <SpanContainer marginTopValue="40px">
            <Span textColor="#000000">수강 예정 강의</Span>
            <Span textColor="#465fcc" marginLeftValue="8px">
              (02)
            </Span>
          </SpanContainer>
          <LectureViewContainer>
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
          <SpanContainer marginTopValue="40px">
            <Span textColor="#000000">내가 짬한 강의</Span>
            <Span textColor="#465fcc" marginLeftValue="8px">
              (04)
            </Span>
          </SpanContainer>
          <LectureViewContainer marginBottomValue="60px">
            {items.map(item => {
              const {
                id,
                expert,
                category,
                endTime,
                title,
                url,
                price,
                salePercentage,
              } = item;
              return (
                <HorizontalLecture
                  key={id}
                  id={id}
                  imageUrl={url}
                  expert={expert}
                  category={category}
                  endTime={endTime}
                  title={title}
                  price={price}
                  salePercentage={salePercentage}
                />
              );
            })}
          </LectureViewContainer>
        </>
      )}
      {param === 'myreview' && (
        <>
          <SpanContainer marginTopValue="40px">
            <Span textColor="#000000">작성 완료한 후기</Span>
            <Span textColor="#465fcc" marginLeftValue="8px">
              (02)
            </Span>
          </SpanContainer>
          <LectureViewContainer marginBottomValue="60px">
            {items.map(item => {
              const {
                id,
                expert,
                category,
                endTime,
                title,
                url,
                price,
                salePercentage,
              } = item;
              return (
                <HorizontalLecture
                  key={id}
                  id={id}
                  imageUrl={url}
                  expert={expert}
                  category={category}
                  endTime={endTime}
                  title={title}
                  price={price}
                />
              );
            })}
          </LectureViewContainer>
          <SpanContainer marginTopValue="40px">
            <Span textColor="#000000">작성 가능한 후기</Span>
            <Span textColor="#465fcc" marginLeftValue="8px">
              (04)
            </Span>
          </SpanContainer>
          <LectureViewContainer marginBottomValue="60px">
            {items.map(item => {
              const {
                id,
                expert,
                category,
                endTime,
                title,
                url,
                price,
                salePercentage,
              } = item;
              return (
                <HorizontalLecture
                  key={id}
                  id={id}
                  imageUrl={url}
                  expert={expert}
                  category={category}
                  endTime={endTime}
                  title={title}
                  price={price}
                />
              );
            })}
          </LectureViewContainer>
        </>
      )}
    </Container>
  );
};

MyLecturePresenter.propTypes = {
  param: PropTypes.string.isRequired,
};
export default MyLecturePresenter;
