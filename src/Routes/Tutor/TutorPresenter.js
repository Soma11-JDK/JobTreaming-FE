/* eslint-disable global-require */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import Subtitle from 'Components/common/Subtitle';
import Tab from 'Components/common/Tab';
import PropTypes from 'prop-types';

import HorizontalLecture from 'Components/HorizontalLecture';
import HorizontalReview from 'Components/HorizontalReview';
import RadarChart from 'Components/RadarChart';
import Dropdown from 'Components/common/Dropdown';

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
  white-space: pre-wrap;
  ${marginTop};
`;

const Span = styled.span`
  color: ${props => props.fontColor || '#000000'};
  font-weight: ${props => props.fontWeight || 500};
  font-size: ${props => props.fontSize || '28px'};
  word-break: keep-all;
  opacity: ${props => props.fontOpacity || 1};
  ${marginTop}
  ${marginLeft}
`;

const star = require('assets/Star/Star.png');
const halfStar = require('assets/Star/HalfStar.png');

const StarContainer = styled.img`
  @media only screen and (max-width: 768px) {
    width: 1.5vw;
  }
  @media only screen and (max-width: 600px) {
    width: 1.2vw;
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

const polygonUrl = require('assets/Polygon 3.png');

const IndexContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  align-items: center;
  ${marginTop}
`;

const IndexIcon = styled.img`
  width: 27px;
  height: 27px;
`;

const LectureViewContainer = styled.div`
  width: 100%;
  height: 100%;
  ${marginBottom}
`;

const StatisticContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 440px;
  border-radius: 10px;
  box-shadow: 0 0 9px 3px rgba(164, 164, 164, 0.1);
  background-color: #ffffff;
  padding: 60px 40px;
  ${marginTop}
  ${marginLeft}
  ${marginRight}
`;

const StatisticLeftContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 40%;
`;

const ScoreLineContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  align-items: center;
  width: 100%;
`;

const ScoreDefaultBar = styled.div`
  height: 10px;
  flex: 1;
  max-width: 80px;
  justify-content: center;
  background-color: #f1f1f1;
  border-radius: 3px;
`;

const ScoreBar = styled.div`
  height: 10px;
  border-radius: 3px;
  background-color: #2a2a2a;
  width: ${props => props.scoreWidth};
`;

const statisticRightContainer = styled.div``;

const MenuContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  width: 100%;
  ${marginTop}
`;

const ListContainer = styled.div`
  height: 100%;
`;

const Menu = styled.div`
  width: 140px;
  height: 40px;
  border: 1px solid black;
  border-radius: 999px;
  margin-right: 10px;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${props => props.bgColor};
`;

const MoreContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: #dfdfdf;
  border-radius: 3px;
  color: #5570ff;
  font-size: 28px;
  display: flex;
  display: -webkit-flex;
  font-weight: 300;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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

const tempText =
  '저는 서울 3류라고 말하는 대학교를 졸업하고 벤처기업을 거쳐 삼성SDS에 신입공채를 통해 입사하였습니다.9 년의 SDS에서의 IT서비스업 경험을 토대로 디지털기업 현대카드에 경력 이직하여 다양한 개발을 하고 있습니다. 저는 삼성SDS에 재직할 당시 3년이상 삼성직업멘토링 에 참가하였고, 이후 다양한 곳(온/오프라인)에서 만난 멘티친구들과 인생의 선배와 후배로 인연을 이어가고 있습니다. 멘토라서, 멘토로서 이야기 하기 보다는 선배와 후배로서, 대한민국에서 직장생활을 하는 사람 또는 IT를 하는 사람이라는 공동체 의식속에서 이야기하고 서로가 서로에게 도움이 되면 좋겠다고 생각하는 사람입니다. 어떤 이야기든 서로의 생각을 나눌 수 있었으면 좋겠습니다. 저와 강의에서 만나 인생의 로드맵을 함께 그려보아요!';

const reviewCategory = [
  {
    id: 1,
    title: '최신순',
  },
  {
    id: 2,
    title: '베스트순',
  },
];
const TutorPresenter = ({ name, param }) => {
  const [dropdownCategory, setDropdown] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };
  return (
    <Container marginTopValue="80px" marginBottomValue="80px">
      <TutorContainer marginBottomValue="60px">
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
            <Span marginLeftValue="5px" fontWeight="bold" fontSize="1.5vw">
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
            {Array(Math.floor(4.9))
              .fill()
              .map((_, i) => (
                <StarContainer src={star} />
              ))}
            {4.9 % 1 > 0 && <StarContainer src={halfStar} />}
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
      <TabContainer marginTopValue="60px">
        <Tab tabInfo={tabInfo} nowTab={param} nowPage="tutor" />
      </TabContainer>
      {param === 'introduce' && (
        <>
          <Span fontWeight="bold" marginTopValue="50px">
            튜터 소개
          </Span>
          <Span fontSize="20px" marginTopValue="30px">
            저는 서울 3류라고 말하는 대학교를 졸업하고 벤처기업을 거쳐 삼성SDS에
            신입공채를 통해 입사하였습니다. <br />9 년의 SDS에서의 IT서비스업
            경험을 토대로 디지털기업 현대카드에 경력 이직하여 다양한 개발을 하고
            있습니다. 저는 삼성SDS에 재직할 당시 3년이상 삼성직업멘토링 에
            참가하였고, 이후 다양한 곳(온/오프라인)에서 만난 멘티친구들과 인생의
            선배와 후배로 인연을 이어가고 있습니다. 멘토라서, 멘토로서 이야기
            하기 보다는 선배와 후배로서, 대한민국에서 직장생활을 하는 사람 또는
            IT를 하는 사람이라는 공동체 의식속에서 이야기하고 서로가 서로에게
            도움이 되면 좋겠다고 생각하는 사람입니다. 어떤 이야기든 서로의
            생각을 나눌 수 있었으면 좋겠습니다. 저와 강의에서 만나 인생의
            로드맵을 함께 그려보아요!
          </Span>
          <Span fontWeight="bold" marginTopValue="50px">
            주요 경력
          </Span>
          <IndexContainer marginTopValue="30px">
            <IndexIcon src={polygonUrl} />
            <Span fontSize="22px" fontWeight="bold" marginLeftValue="5px">
              학력
            </Span>
          </IndexContainer>
          <IndexContainer marginTopValue="30px">
            <IndexIcon src={polygonUrl} />
            <Span fontSize="22px" fontWeight="bold" marginLeftValue="5px">
              경력
            </Span>
          </IndexContainer>
          <IndexContainer marginTopValue="30px">
            <IndexIcon src={polygonUrl} />
            <Span fontSize="22px" fontWeight="bold" marginLeftValue="5px">
              튜터링
            </Span>
          </IndexContainer>
        </>
      )}
      {param === 'proceeding' && (
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
      )}
      {param === 'review' && (
        <>
          <StatisticContainer
            marginTopValue="50px"
            marginLeftValue="auto"
            marginRightValue="auto"
          >
            <StatisticLeftContainer>
              <Span>매우 추천합니다!</Span>
              <SpanContainer marginTopValue="10px">
                <Span marginLeftValue="5px" fontWeight="bold" fontSize="2vw">
                  4.9
                </Span>
                <Span
                  marginLeftValue="5px"
                  fontWeight="bold"
                  fontSize="2vw"
                  fontColor="#999999"
                >
                  / 5.0
                </Span>
                <Span fontSize="1vw"> (214명)</Span>
              </SpanContainer>
              <SpanContainer marginTopValue="10px">
                {Array(Math.floor(4.9))
                  .fill()
                  .map((_, i) => (
                    <StarContainer src={star} />
                  ))}
                {4.9 % 1 > 0 && <StarContainer src={halfStar} />}
              </SpanContainer>
              <ScoreLineContainer>
                <Span fontSize="18px"> 5점 </Span>
                <ScoreDefaultBar>
                  <ScoreBar scoreWidth={`${(128 / 214) * 100}%`} />
                </ScoreDefaultBar>
                <Span fontSize="16px" fontOpacity="0.7">
                  (128명)
                </Span>
              </ScoreLineContainer>
              <ScoreLineContainer>
                <Span fontSize="18px"> 4점 </Span>
                <ScoreDefaultBar>
                  <ScoreBar scoreWidth={`${(62 / 214) * 100}%`} />
                </ScoreDefaultBar>
                <Span fontSize="16px" fontOpacity="0.7">
                  (62명)
                </Span>
              </ScoreLineContainer>
              <ScoreLineContainer>
                <Span fontSize="18px"> 3점 </Span>
                <ScoreDefaultBar>
                  <ScoreBar scoreWidth={`${(16 / 214) * 100}%`} />
                </ScoreDefaultBar>
                <Span fontSize="16px" fontOpacity="0.7">
                  (16명)
                </Span>
              </ScoreLineContainer>
              <ScoreLineContainer>
                <Span fontSize="18px"> 2점 </Span>
                <ScoreDefaultBar>
                  <ScoreBar scoreWidth={`${(5 / 214) * 100}%`} />
                </ScoreDefaultBar>
                <Span fontSize="16px" fontOpacity="0.7">
                  (5명)
                </Span>
              </ScoreLineContainer>
              <ScoreLineContainer>
                <Span fontSize="18px"> 1점 </Span>
                <ScoreDefaultBar>
                  <ScoreBar scoreWidth={`${(3 / 214) * 100}%`} />
                </ScoreDefaultBar>
                <Span fontSize="16px" fontOpacity="0.7">
                  (3명)
                </Span>
              </ScoreLineContainer>
            </StatisticLeftContainer>

            <RadarChart title="튜터분석 그래프" />
          </StatisticContainer>
          <SpanContainer marginTopValue="50px">
            <Span fontWeight="bold">수강생 후기</Span>
            <Span fontOpacity="0.6">(28)</Span>
          </SpanContainer>
          <MenuContainer marginTopValue="30px">
            <ListContainer
              onMouseEnter={() => onMouseEnter()}
              onMouseLeave={onMouseLeave}
            >
              <Menu>
                <Span fontSize="16px"> 최근순 </Span>
              </Menu>
              {dropdownCategory && <Dropdown categoryItems={reviewCategory} />}
            </ListContainer>
          </MenuContainer>
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
                  best
                  username="취준 화이팅"
                />
              );
            })}
          </LectureViewContainer>
          <MoreContainer> +더보기</MoreContainer>
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
