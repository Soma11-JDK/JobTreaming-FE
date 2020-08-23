import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Slider from 'Components/Slider';
import Category from 'Components/Category';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
`;

const CategoryDivider = styled.div`
  width: 100%;
  height: 50px;
`;

const Line = styled.hr`
  position: relative;
  width: 100%;
  color: gray;
  size: 1px;
  top: 50%;
  z-index: -1;
  transform: translate(0, -50%);
`;

const CategoryBox = styled.div`
  position: relative;
  z-index: 2;
  width: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -75%);
  background-color: white;
  height: 40px;
  border: 1px solid gray;
`;

const CategoryText = styled.span`
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

const HomePresenter = ({ categoryItems }) => (
  <>
    <Slider />
    <CategoryDivider>
      <Line />
      <CategoryBox>
        <CategoryText>카테고리 별 강연 찾기</CategoryText>
      </CategoryBox>
    </CategoryDivider>
    <CategoryContainer>
      <Category categoryItems={categoryItems} />
    </CategoryContainer>
  </>
);

HomePresenter.propTypes = {
  categoryItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      url: PropTypes.node,
    }),
  ).isRequired,
};

export default HomePresenter;
