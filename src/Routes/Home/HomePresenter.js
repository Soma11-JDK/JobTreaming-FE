/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Slider from 'Components/common/Slider';
import Category from 'Components/Category';
import Popular from 'Components/Popular';
import PopularSlider from 'Components/PopularSlider';
import Advertise from 'Components/Advertise';
import Subtitle from 'Components/common/Subtitle';
import ReviewSlider from '../../Components/ReviewSlider';

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

const TitleContainer = styled.div`
  width: 100%;
  height: 55px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 68px;
  align-items: center;
`;

const MoreSpan = styled.span`
  font-size: 21px;
  font-weight: 500;
  opacity: 0.8;
  align-self: flex-end;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

const ReviewContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ccd9ff;
  display: flex;
  padding: 20px;
  align-items: center;
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

const reviewTestItems = [
  {
    id: 1,
    username: '김지연',
    date: '2020.09.24',
    content:
      '평소 온라인 강의수강시 궁금한 점이 생길 경우 그냥 넘어가고 잊곤 했는데 잡트리밍에서는 이러한 부분에 대해 빠르게 피드백을 받을 수 있어서 마치 1:1과외를 받는 기분이여서 좋았습니다.',
    url: require('assets/test1.png'),
  },
  {
    id: 2,
    username: '이지은',
    date: '2020.08.17',
    content:
      '강의 수강시 이론적인 부분에 대한 질문은 물론 실제 업무를 할 때 적용할 수 있는 부분까지 질문 할 수 있어서 너무 많은 도움이 되었어요! 덕분에 실무에서 빠르게 적응할 수 있었습니다.',
    url: require('assets/test2.png'),
  },
  {
    id: 3,
    username: '이지은',
    date: '2020.08.17',
    content:
      '취업 준비생으로서 어떤 부분이 부족하고 어떤 방향성을 가지고 관심분야를 준비해야하는지 막막했었는데 실무자에게 직접 질문하고 상담하면서 평소 답답했던 부분을 시원하게 해결할 수 있었습니다.',
    url: require('assets/test3.png'),
  },
  {
    id: 4,
    username: '김지연',
    date: '2020.09.24',
    content:
      '평소 온라인 강의수강시 궁금한 점이 생길 경우 그냥 넘어가고 잊곤 했는데 잡트리밍에서는 이러한 부분에 대해 빠르게 피드백을 받을 수 있어서 마치 1:1과외를 받는 기분이여서 좋았습니다.',
    url: require('assets/test1.png'),
  },
  {
    id: 5,
    username: '김지연',
    date: '2020.09.24',
    content:
      '평소 온라인 강의수강시 궁금한 점이 생길 경우 그냥 넘어가고 잊곤 했는데 잡트리밍에서는 이러한 부분에 대해 빠르게 피드백을 받을 수 있어서 마치 1:1과외를 받는 기분이여서 좋았습니다.',
  },
  {
    id: 6,
    username: '김지연',
    date: '2020.09.24',
    content:
      '평소 온라인 강의수강시 궁금한 점이 생길 경우 그냥 넘어가고 잊곤 했는데 잡트리밍에서는 이러한 부분에 대해 빠르게 피드백을 받을 수 있어서 마치 1:1과외를 받는 기분이여서 좋았습니다.',
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
      <DividerContainer>
        <BelowContainer>
          <TitleContainer>
            <Subtitle title="오늘의 잡트리밍" />
            <MoreSpan>전체 보기</MoreSpan>
          </TitleContainer>
          {/* 인기 강연 포스터 */}
          <PopularSlider items={items} />
        </BelowContainer>
      </DividerContainer>

      {/* 광고 */}
      <Advertise />

      {/* 수강생 후기 */}

      <BelowContainer>
        <TitleContainer>
          <Subtitle title="수강생 후기" />
          <MoreSpan>전체 보기</MoreSpan>
        </TitleContainer>
      </BelowContainer>
      <ReviewContainer>
        <BelowContainer>
          {/* 인기 강연 포스터 */}
          <ReviewSlider items={reviewTestItems} />
        </BelowContainer>
      </ReviewContainer>
    </Container>
  </>
);

export default HomePresenter;
export { items };
