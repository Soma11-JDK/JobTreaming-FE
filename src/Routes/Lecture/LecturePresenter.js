import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SideBar from 'Components/SideBar';
import { categoryItems } from 'Components/Category';
import LecturePreview from 'Components/LecturePreview';
import { items } from '../Home/HomePresenter';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  @media only screen and (max-width: 600px) {
    height: 100vh;
  }
`;

const CategoryTitleContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 40px;
  font-size: 20px;
  background-color: lightgreen;
  margin-bottom: 10px;
`;

const LectureContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 20px;
`;
const LectureGird = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const LecturePresenter = ({
  // result,
  // loading,
  // error,
  categoryId,
  categoryTitle,
}) => (
  <>
    <CategoryTitleContainer>{categoryTitle}</CategoryTitleContainer>
    <Container>
      <SideBar key={categoryId} current={categoryId} itemList={categoryItems} />
      <LectureContainer>
        <LectureGird>
          {items.map(test => (
            <LecturePreview
              key={test.id}
              id={test.id}
              title={test.title}
              imageUrl={test.url}
              date={test.endTime}
            />
          ))}
        </LectureGird>
      </LectureContainer>
    </Container>
  </>
);

LecturePresenter.propTypes = {
  categoryId: PropTypes.number.isRequired,
  categoryTitle: PropTypes.string.isRequired,
};
export default LecturePresenter;
