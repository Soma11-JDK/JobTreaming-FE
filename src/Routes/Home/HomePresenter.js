import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Slider from 'Components/Slider';
import Category from 'Components/Category';
import LecturePreview from 'Components/LecturePreview';
import Popular from 'Components/Popular';

const DividerContainer = styled.div`
  &.below {
    flex-direction: row;
    justify-content: space-between;
  }
  width: 100%;
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

const DivideBox = styled.div`
  position: relative;
  width: 200px;
  left: 50%;
  transform: translate(-50%, -75%);
  background-color: white;
  height: 40px;
  border: 1px solid gray;
`;

const DivideText = styled.span`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BelowContainer = styled.div`
  :not(:last-child) {
    margin-right: 10px;
  }
  width: 50vw;
  background-color: lightgray;
`;

const testSet = [
  {
    id: 1,
    title: 'test',
    // eslint-disable-next-line global-require
    imageUrl: require('assets/tempProfile.png'),
    date: '2020.08.27',
  },
  {
    id: 2,
    title: 'test2',
    // eslint-disable-next-line global-require
    imageUrl: require('assets/categories/before/cate_1_before.jpg'),
    date: '2020.08.27',
  },
  {
    id: 3,
    title: 'test3',
    // eslint-disable-next-line global-require
    imageUrl: require('assets/categories/before/cate_1_before.jpg'),
    date: '2020.08.27',
  },
];
const HomePresenter = () => (
  <>
    <Slider />
    {/* 카테고리 별 강연 찾기 */}
    <DividerContainer>
      <Line />
      <DivideBox>
        <DivideText>카테고리 별 강연 찾기</DivideText>
      </DivideBox>

      {/* 카테고리 이미지 */}
      <CategoryContainer>
        <Category />
      </CategoryContainer>
    </DividerContainer>

    {/* 인기 강연 */}
    <DividerContainer className="below">
      <BelowContainer>
        <DivideBox>
          <DivideText>인기 강연</DivideText>
        </DivideBox>
        {/* 인기 강연 포스터 */}

        <Popular>
          {testSet.map(test => (
            <LecturePreview
              key={test.id}
              id={test.id}
              title={test.title}
              imageUrl={test.imageUrl}
              date={test.date}
            />
          ))}
        </Popular>
      </BelowContainer>

      {/* 인기 강연 */}
      <BelowContainer>
        <DivideBox>
          <DivideText>인기 청원</DivideText>
        </DivideBox>
        {/* 인기 강연 포스터 */}
        <Popular>
          {testSet.map(test => (
            <LecturePreview
              key={test.id}
              id={test.id}
              title={test.title}
              imageUrl={test.imageUrl}
              date={test.date}
            />
          ))}
        </Popular>
      </BelowContainer>
    </DividerContainer>
  </>
);

export default HomePresenter;
export { testSet };
