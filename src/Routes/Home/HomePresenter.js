/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Slider from 'Components/Slider';
import Category from 'Components/Category';
import Popular from 'Components/Popular';
import PopularSlider from 'Components/PopularSlider';
import Advertise from 'Components/Advertise';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 83px;
  display: flex;
  justify-content: center;
`;

const searchIcon = require('assets/fe:search.png');

const Input = styled.input`
  background: #ffffff url(${searchIcon}) center right no-repeat;
  background-origin: content-box;
  align-items: center;
  border-radius: 66px;
  border: 2px solid #000000;
  padding-left: 20px;
  padding-right: 24px;
  width: 50%;
  height: 72px;
  font-weight: normal;
  font-size: 1.8vw;
  ::placeholder {
    color: #000000;
    opacity: 0.7;
  }
`;

const DividerContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 125px;
`;

const Line = styled.hr`
  position: relative;
  width: 100%;
  color: gray;
  size: 1px;
  transform: translate(0, -50%);
`;

const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BelowContainer = styled.div`
  justify-content: center;
  width: 85%;
  margin: auto;
`;

const TodayStreamingContainer = styled.div`
  width: 100%;
  height: 55px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 68px;
  align-items: center;
`;

const TodayStreamingLeft = styled.div`
  display: flex;
  align-items: center;
`;

const TodayStreamingSpan = styled.div`
  font-size: 36px;
  font-weight: bold;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

const TodayStreamingMore = styled.div`
  font-size: 21px;
  font-weight: 500;
  opacity: 0.8;
  align-self: flex-end;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

const PolygonUrl = require('assets/Polygon 3.png');

const PolygonIcon = styled.img`
  margin-right: 10px;
`;

const items = [
  {
    id: 1,
    expert: '문효영',
    category: '정보통신',
    endTime: '18:30 PM',
    title: '비전공자에서 10년 경력 개발자가 될 수 있었던 노하우',
    price: 38900,
    salePercentage: 35,
    url: require('assets/test1.png'),
  },
  {
    id: 2,
    expert: '제임스오',
    category: '정보통신',
    endTime: '18:45 PM',
    title: '실리콘벨리 개발자가 알려주는 프론트앤드 취업가이드',
    price: 53000,
    salePercentage: 28,
    url: require('assets/test2.png'),
  },
  {
    id: 3,
    expert: '김은정',
    category: '의료',
    endTime: '19:30 PM',
    title: '예비 간호사를 위한 3대 대학병원 면접대비 방법',
    price: 37000,
    salePercentage: 40,
    url: require('assets/test3.png'),
  },
  {
    id: 4,
    expert: '조화용',
    category: '음식서비스',
    endTime: '20:00 PM',
    title: '외식격영 전문가의 성공적인 창업을 위한 컨설팅',
    price: 25000,
    salePercentage: 20,
    url: require('assets/test4.png'),
  },
  {
    id: 5,
    expert: '문효영',
    category: '정보통신',
    endTime: '18:30 PM',
    title: '비전공자에서 10년 경력 개발자가 될 수 있었던 노하우',
    price: 38900,
    salePercentage: 35,
    url: require('assets/test1.png'),
  },
  {
    id: 6,
    expert: '문효영',
    category: '정보통신',
    endTime: '18:30 PM',
    title: '비전공자에서 10년 경력 개발자가 될 수 있었던 노하우',
    price: 38900,
    salePercentage: 35,
    url: require('assets/test1.png'),
  },
];

const HomePresenter = () => (
  <>
    <Container>
      <Slider />
      <InputContainer>
        <Input type="text" placeholder="어떤 분야의 도움을 받고 싶으신가요?" />
      </InputContainer>
      {/* 카테고리 별 강연 찾기 */}
      <DividerContainer>
        {/* 카테고리 이미지 */}
        <CategoryContainer>
          <Category />
        </CategoryContainer>
      </DividerContainer>

      {/* 인기 강연 */}
      <DividerContainer className="below">
        <BelowContainer>
          <TodayStreamingContainer>
            <TodayStreamingLeft>
              <PolygonIcon src={PolygonUrl} />
              <TodayStreamingSpan> 오늘의 잡트리밍</TodayStreamingSpan>
            </TodayStreamingLeft>
            <TodayStreamingMore>전체 보기</TodayStreamingMore>
          </TodayStreamingContainer>
          {/* 인기 강연 포스터 */}
          <PopularSlider items={items} />

          {/* <Popular>
            {testSet.map(test => (
              <LecturePreview
                key={test.id}
                id={test.id}
                title={test.title}
                imageUrl={test.imageUrl}
                date={test.date}
              />
            ))}
            </Popular> */}
        </BelowContainer>
      </DividerContainer>

      {/* 광고 */}
      <Advertise />
    </Container>
  </>
);

export default HomePresenter;
export { items };
