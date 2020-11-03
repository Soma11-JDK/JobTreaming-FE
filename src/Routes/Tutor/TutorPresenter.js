/* eslint-disable global-require */
import React from 'react';
import styled, { css } from 'styled-components';

import Subtitle from 'Components/common/Subtitle';
import Tab from 'Components/common/Tab';
import PropTypes from 'prop-types';

import LecturePreview from 'Components/LecturePreview';
import HorizontalLecture from 'Components/HorizontalLecture';
import HorizontalReview from 'Components/HorizontalReview';
import RadarChart from 'Components/RadarChart';

import { items } from '../Home/HomePresenter';

const marginTop = css`
  ${({ marginTopValue }) => marginTopValue && `margin-top : ${marginTopValue};`}
`;

const marginBottom = css`
  ${({ marginBottomValue }) =>
    marginBottomValue && `margin-bottom : ${marginBottomValue};`}
`;

const marginRight = css`
  ${({ marginRightValue }) =>
    marginRightValue && `margin-right : ${marginRightValue};`}
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

const TutorContainer = styled.div`
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #f7ebff;
  position: relative;
  ${marginBottom};
`;

const unionImageUrl = require('assets/Union/Union.png');
const profileImageUrl = require('assets/TestTutor/Tutor.png');

const ImageContainer = styled.div`
  display: flex;
  position: relative;

  height: 70%;
  ${marginLeft}
`;

const UnionImage = styled.img`
  width: 70%;
  height: 70%;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;

  position: absolute;
`;

const ProfileInfoContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
`;

const Username = styled.span`
  font-size: 3vw;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;

  color: #000000;
  word-break: keep-all;
  ${marginTop}
`;

const instagramIcon = require('assets/Icon/Instagram.png');
const gmailIcon = require('assets/Icon/Gmail.png');

const SnsContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  align-items: center;
`;

const IconContainer = styled.img`
  ${marginRight}
`;

const TabContainer = styled.div`
  ${marginTop}
`;

const tabInfo = [
  { title: '튜터 소개', state: 'introduce' },
  { title: '진행중인 강의', state: 'proceeding' },
  { title: '종료된 강의', state: 'finish' },
  { title: '수강생 후기', state: 'review' },
];

const SpanContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  align-items: center;
  ${marginTop}
`;

const Span = styled.span`
  color: ${props => props.fontColor || '#000000'};
  font-weight: ${props => props.fontWeight || 500};
  font-size: ${props => props.fontSize || '28px'};
  word-break: keep-all;
  ${marginLeft}
`;

const star = require('assets/Star/Star.png');
const halfStar = require('assets/Star/HalfStar.png');

const StarContainer = styled.img`
  @media only screen and (max-width: 768px) {
    width: 1vw;
  }
  @media only screen and (max-width: 600px) {
    width: 1vw;
  }
`;

const smallLectureApply = require('assets/LectureApply/LectureApply.png');
const mediumLectureApply = require('assets/LectureApply/LectureApply@2x.png');
const largeLectureApply = require('assets/LectureApply/LectureApply@3x.png');

const LectureApplyContainer = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  ${marginRight}
  ${marginBottom}
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
    title: '한 큐에 끝내는 파이썬3 마스터 Vol.2 [고급자용]',
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
    title: '현직자가 알려주는 IT개발 A to Z',
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
    title: '현직자가 알려주는 IT개발 A to Z',
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
    title: '현직자가 알려주는 IT개발 A to Z',
    review:
      '튜터님께서 채팅으로 질문도 바로 받아서 답변해주시고 좋은 조언들 많이 해주셨습니다! ',
    url: require('assets/test4.png'),
  },
];

const TutorPresenter = ({ name, param }) => {
  return (
    <Container marginTopValue="80px" marginBottomValue="80px">
      <TutorContainer marginBottomValue="20px">
        <ImageContainer marginLeftValue="10px">
          <UnionImage src={unionImageUrl} />
          <ProfileImage src={profileImageUrl} />
        </ImageContainer>
        <ProfileInfoContainer>
          <Username>{name} 튜터</Username>

          <SnsContainer>
            <IconContainer marginRightValue="5px" src={gmailIcon} />
            test@test.com
          </SnsContainer>
          <SnsContainer>
            <IconContainer marginRightValue="5px" src={instagramIcon} />
            test@test.com
          </SnsContainer>

          <SpanContainer marginTopValue="20px">
            <Span fontSize="1vw">분야</Span>
            <Span marginLeftValue="5px" fontWeight="bold" fontSize="2vw">
              정보통신, 그로스해커
            </Span>
          </SpanContainer>
          <SpanContainer>
            <Span fontSize="1vw">평점</Span>
            <Span marginLeftValue="5px" fontWeight="bold" fontSize="1.5vw">
              4.9
            </Span>
            <Span
              marginLeftValue="5px"
              fontWeight="bold"
              fontSize="1.5vw"
              fontColor="#999999"
            >
              / 5.0
            </Span>
            {Array(Math.floor(4.5))
              .fill()
              .map((_, i) => (
                <StarContainer src={star} />
              ))}
            {4.5 % 1 > 0 && <StarContainer src={halfStar} />}
          </SpanContainer>
        </ProfileInfoContainer>
        <RadarChart />
        <LectureApplyContainer
          marginRightValue="20px"
          marginBottomValue="20px"
          src={smallLectureApply}
          srcSet={`${smallLectureApply} 300w, ${mediumLectureApply} 768w, ${mediumLectureApply} 1280w`}
        />
      </TutorContainer>
      <Subtitle title={`${name} 튜터`} />
      <TabContainer marginTopValue="20px">
        <Tab tabInfo={tabInfo} nowTab={param} nowPage="tutor" />
      </TabContainer>
      {param === 'introduce' && (
        <>
          <SpanContainer marginTopValue="40px">
            <Span>오늘의 강의</Span>
            <Span fontColor="#465fcc" marginLeftValue="8px">
              ({items.length})
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
            <Span>수강 예정 강의</Span>
            <Span fontColor="#465fcc" marginLeftValue="8px">
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
      {param === 'proceeding' && (
        <>
          <SpanContainer marginTopValue="40px">
            <Span>내가 짬한 강의</Span>
            <Span fontColor="#465fcc" marginLeftValue="8px">
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
                />
              );
            })}
          </LectureViewContainer>
        </>
      )}
      {param === 'finish' && (
        <>
          <SpanContainer marginTopValue="40px">
            <Span>작성 완료한 후기</Span>
            <Span fontColor="#465fcc" marginLeftValue="8px">
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
            <Span>작성 가능한 후기</Span>
            <Span fontColor="#465fcc" marginLeftValue="8px">
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
                />
              );
            })}
          </LectureViewContainer>
        </>
      )}
    </Container>
  );
};

TutorPresenter.propTypes = {
  param: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default TutorPresenter;
