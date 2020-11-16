/* eslint-disable global-require */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Subtitle from 'Components/common/Subtitle';
import Tab from 'Components/common/Tab';

import LecturePreview from 'Components/lecture/LecturePreview';
import HorizontalLecture from 'Components/lecture/HorizontalLecture';
import HorizontalReview from 'Components/lecture/HorizontalReview';

import Question from 'Components/lecture/Question';
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

const reviewItems = [
  {
    id: 1,
    rating: 4.5,
    date: '2020/09/17',
    expertScore: 4.8,
    priceScore: 3.8,
    presentScore: 4.2,
    beneficialScore: 4.6,
    funScore: 5.0,
    kindScore: 5.0,
    reviewTitle: '한 큐에 끝내는 파이썬3 마스터 Vol.2 [고급자용]',
    review:
      '지불한 비용 이상으로 높은 가치의 수업을 들었습니다. 친절하고 디테일한 내용도 좋았지만 자신의 진솔한 경험을 녹여내서 더 좋았습니다.',
    url: require('assets/test1.png'),
  },
  {
    id: 2,
    rating: 5.0,
    date: '2020/09/17',
    expertScore: 4.8,
    priceScore: 3.8,
    presentScore: 4.2,
    beneficialScore: 4.6,
    funScore: 5.0,
    reviewTitle: '현직자가 알려주는 IT개발 A to Z',
    review:
      '튜터님께서 채팅으로 질문도 바로 받아서 답변해주시고 좋은 조언들 많이 해주셨습니다! 그리고 회사에서 실제로 어떤 일을 하는지 등 쉽게 들을 수 없었던 이야기들도 많이 해주셨습니다. 감사합니다!!',
    url: require('assets/test2.png'),
  },
  {
    id: 3,
    rating: 1.5,
    date: '2020/09/17',
    expertScore: 4.8,
    priceScore: 3.8,
    presentScore: 4.2,
    beneficialScore: 4.6,
    funScore: 5.0,
    reviewTitle: '현직자가 알려주는 IT개발 A to Z',
    review:
      '튜터님께서 채팅으로 질문도 바로 받아서 답변해주시고 좋은 조언들 많이 해주셨습니다! 그리고 회사에서 실제로 어떤 일을 하는지 등 쉽게 들을 수 없었던 이야기들도 많이 해주셨습니다. 감사합니다!! 튜터님께서 채팅으로 질문도 바로 받아서 답변해주시고 좋은 조언들 많이 해주셨습니다! 그리고 회사에서 실제로 어떤 일을 하는지 등 쉽게 들을 수 없었던 이야기들도 많이 해주셨습니다. 감사합니다!!',
    url: require('assets/test3.png'),
  },
  {
    id: 4,
    rating: 1.5,
    date: '2020/09/17',
    expertScore: 4.8,
    priceScore: 3.8,
    presentScore: 4.2,
    beneficialScore: 4.6,
    funScore: 5.0,
    reviewTitle: '현직자가 알려주는 IT개발 A to Z',
    review:
      '튜터님께서 채팅으로 질문도 바로 받아서 답변해주시고 좋은 조언들 많이 해주셨습니다! ',
    url: require('assets/test4.png'),
  },
];

const MyLecturePresenter = ({ param, myLectureList }) => {
  return (
    <Container marginTopValue="80px" marginBottomValue="80px">
      <ProfileContainer marginBottomValue="20px">
        <ProfileImage src={profileImageUrl} />
        <Username marginTopValue="10px">eunhye_22</Username>
      </ProfileContainer>
      <Subtitle title="나의 강의장" />
      <TabContainer marginTopValue="20px">
        <Tab tabInfo={tabInfo} nowTab={param} nowPage="myLecture" />
      </TabContainer>
      {param === 'mylecture' && (
        <>
          <SpanContainer marginTopValue="40px">
            <Span textColor="#000000">오늘의 강의</Span>
            <Span textColor="#465fcc" marginLeftValue="8px">
              ({myLectureList.length})
            </Span>
          </SpanContainer>
          <LectureViewContainer marginTopValue="20px">
            <LectureGird>
              {myLectureList.map(item => {
                const {
                  id,
                  expertName,
                  category,
                  endedAt,
                  title,
                  fileName,
                } = item;
                return (
                  <LecturePreview
                    key={id}
                    id={id}
                    imageUrl={fileName}
                    expert={expertName}
                    category={category}
                    endTime={endedAt}
                    title={title}
                  />
                );
              })}
            </LectureGird>
          </LectureViewContainer>
          <SpanContainer marginTopValue="40px">
            <Span textColor="#000000">수강 예정 강의</Span>
            <Span textColor="#465fcc" marginLeftValue="8px">
              ({items.length})
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
              ({items.length})
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
                  btnTitle="수강신청하기"
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
              ({reviewItems.length})
            </Span>
          </SpanContainer>
          <LectureViewContainer marginBottomValue="60px">
            {reviewItems.map(item => {
              const {
                id,
                rating,
                date,
                expertScore,
                priceScore,
                presentScore,
                beneficialScore,
                funScore,
                kindScore,
                title,
                review,
                url,
              } = item;
              return (
                <HorizontalReview
                  key={id}
                  id={id}
                  rating={rating}
                  date={date}
                  expertScore={expertScore}
                  priceScore={priceScore}
                  presentScore={presentScore}
                  beneficialScore={beneficialScore}
                  funScore={funScore}
                  kindScore={kindScore}
                  title={title}
                  review={review}
                  imageUrl={url}
                />
              );
            })}
          </LectureViewContainer>
          <SpanContainer marginTopValue="40px">
            <Span textColor="#000000">작성 가능한 후기</Span>
            <Span textColor="#465fcc" marginLeftValue="8px">
              ({items.length})
            </Span>
          </SpanContainer>
          <LectureViewContainer marginBottomValue="60px">
            {items.map(item => {
              const { id, expert, category, endTime, title, url, price } = item;
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
                  btnTitle="후기작성하기"
                />
              );
            })}
          </LectureViewContainer>
        </>
      )}
      {param === 'myquestion' && (
        <>
          <SpanContainer marginTopValue="40px">
            <Span textColor="#000000">작성 완료한 문의/기대평</Span>
            <Span textColor="#465fcc" marginLeftValue="8px">
              ({items.length})
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
                <Question
                  key={id}
                  id={id}
                  imageUrl={url}
                  expert={expert}
                  category={category}
                  endTime={endTime}
                  title={title}
                  price={price}
                  salePercentage={salePercentage}
                  btnTitle="수강신청하기"
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
  myLectureList: PropTypes.arrayOf(),
};

MyLecturePresenter.defaultProps = {
  myLectureList: null,
};

export default MyLecturePresenter;
export { reviewItems };
