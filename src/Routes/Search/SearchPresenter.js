import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import LecturePreview from 'Components/lecture/LecturePreview';
import Subtitle from 'Components/common/Subtitle';
import Dropdown from 'Components/common/Dropdown';
import CustomDateRange from 'Components/common/CustomDateRange';
import { connect, useSelector } from 'react-redux';
import * as searchActions from 'redux/modules/search';
import { bindActionCreators } from 'redux';
import TestDateRange from 'Components/TestDateRange';
import TestDatePicker from 'Components/TestDatePicker';
import CustomDate from 'Components/common/CustomDate';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 600px) {
    height: 100%;
  }
`;

const CategoryTitleContainer = styled.div`
  width: 100%;
  font-size: 20px;
  padding: 0px 80px;
  margin: 50px auto 30px auto;
`;

const LectureViewContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 80px;
`;

const LectureGird = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const MenuContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  width: 100%;
  padding: 0px 80px;
`;

const DateRangeContainer = styled.div`
  width: 100%;
  padding: 0px 80px;
  margin-top: 10px;
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

const PetitionLinkContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  width: 100%;
  height: 172px;
  margin: 120px 0 120px 0;
  padding: 0 20px;
  background-color: #cbd3ff;
  justify-content: space-around;
`;

const CircleContainer = styled.div`
  height: 100%;
  display: flex;
`;

const Semicircle = styled.div`
  width: 86px;
  height: 172px;
  border: 2px solid #5570ff;
  border-radius: 100px 0 0 100px;
  background-color: #5570ff;
  :not(:first-child) {
    margin-left: 20px;
  }
`;
const SemicircleRight = styled(Semicircle)`
  border-radius: 0 100px 100px 0;
`;

const SpanContainer = styled.div`
  height: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Span = styled.span`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  margin-bottom: ${props => props.marginBottom};
`;

const heartUrl = require('assets/Heart/Heart.png');

const SearchPresenter = ({ searchResults, searchTerm, categoryItems }) => {
  const searchTitle = `${
    searchTerm === '' ? '모든' : `'${searchTerm}'`
  } 검색결과`;
  return (
    <>
      <Container>
        <CategoryTitleContainer>
          <Subtitle title={searchTitle} />
        </CategoryTitleContainer>
        {console.log(`lectureData: ${JSON.stringify(searchResults)}`)}
        <LectureViewContainer>
          <LectureGird>
            {searchResults &&
              searchResults.map(item => {
                const {
                  id,
                  expertName,
                  category,
                  endedAt,
                  title,
                  price,
                  salePercentage,
                  fileName,
                } = item;

                return (
                  <LecturePreview
                    key={id}
                    type="getImage"
                    id={id}
                    imageUrl={fileName}
                    heartUrl={heartUrl}
                    expert={expertName}
                    category={category}
                    endedAt={endedAt}
                    title={title}
                    price={price}
                    salePercentage={salePercentage}
                  />
                );
              })}
          </LectureGird>
        </LectureViewContainer>
        <PetitionLinkContainer>
          <CircleContainer>
            <Semicircle />
            <Semicircle />
          </CircleContainer>
          <SpanContainer>
            <Span fontSize="1.8vw" fontWeight="500" marginBottom="10px">
              찾으시는 강의가 없다면?
            </Span>
            <Span fontSize="2.5vw" fontWeight="bold">
              강의 청원하러 가기
            </Span>
          </SpanContainer>
          <CircleContainer>
            <SemicircleRight />
            <SemicircleRight />
          </CircleContainer>
        </PetitionLinkContainer>
      </Container>
    </>
  );
};

SearchPresenter.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.node),
  searchTerm: PropTypes.string,
  categoryItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

SearchPresenter.defaultProps = {
  searchResults: null,
  searchTerm: '',
};

export default connect(
  state => ({
    search: state.search,
  }),
  dispatch => ({
    SearchActions: bindActionCreators(searchActions, dispatch),
  }),
)(SearchPresenter);
