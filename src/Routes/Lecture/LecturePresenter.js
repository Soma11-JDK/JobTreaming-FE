import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import LecturePreview from 'Components/LecturePreview';
import Subtitle from 'Components/common/Subtitle';
import { categoryItems } from 'Components/Category';
import Dropdown from 'Components/common/Dropdown';
import CustomDateRange from 'Components/common/CustomDateRange';
import TestDateRange from 'Components/TestDateRange';
import TestDatePicker from 'Components/TestDatePicker';
import Testairbnb from 'Components/Testairbnb';

import { items } from '../Home/HomePresenter';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
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
  margin-top: 120px;
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

const LecturePresenter = ({
  // result,
  // loading,
  // error,
  categoryId,
  categoryTitle,
}) => {
  const [dropdownCategory, setDropdown] = useState(false);
  const [dropdownSubCategory, setSubDropdown] = useState(false);

  const onMouseEnter = type => {
    if (type === 1) setDropdown(true);
    else if (type === 2) setSubDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
    setSubDropdown(false);
  };
  return (
    <>
      <Container>
        <CategoryTitleContainer>
          <Subtitle title={categoryTitle} />
        </CategoryTitleContainer>
        <MenuContainer>
          <ListContainer
            onMouseEnter={() => onMouseEnter(1)}
            onMouseLeave={onMouseLeave}
          >
            <Menu>
              <Span fontSize="16px"> {categoryTitle} </Span>
            </Menu>
            {dropdownCategory && <Dropdown categoryItems={categoryItems} />}
          </ListContainer>
          <ListContainer
            onMouseEnter={() => onMouseEnter(2)}
            onMouseLeave={onMouseLeave}
          >
            <Menu>
              <Span fontSize="16px"> 세부 카테고리 </Span>
            </Menu>
            {dropdownSubCategory && <Dropdown categoryItems={categoryItems} />}
          </ListContainer>
        </MenuContainer>
        <DateRangeContainer>
          <CustomDateRange />
        </DateRangeContainer>
        <LectureViewContainer>
          <LectureGird>
            {items.map(item => {
              const {
                id,
                expert,
                category,
                endTime,
                title,
                price,
                salePercentage,
                url,
              } = item;
              return (
                <LecturePreview
                  key={id}
                  id={id}
                  imageUrl={url}
                  heartUrl={heartUrl}
                  expert={expert}
                  category={category}
                  endTime={endTime}
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

LecturePresenter.propTypes = {
  categoryId: PropTypes.number.isRequired,
  categoryTitle: PropTypes.string.isRequired,
};
export default LecturePresenter;
