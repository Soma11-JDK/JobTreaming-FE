import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import LecturePreview from 'Components/lecture/LecturePreview';
import Subtitle from 'Components/common/Subtitle';
import Dropdown from 'Components/common/Dropdown';
import CustomDateRange from 'Components/common/CustomDateRange';
import TestDateRange from 'Components/TestDateRange';
import TestDatePicker from 'Components/TestDatePicker';
import CustomDate from 'Components/common/CustomDate';
import Message from 'Components/common/Message';
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
  height: 68px;
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
  results,
  // loading,
  // error,
  categoryId,
  categoryTitle,
  categoryItems,
}) => {
  const [dropdownCategory, setDropdown] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };
  return (
    <>
      <Container>
        <CategoryTitleContainer>
          <Subtitle title={categoryTitle} />
        </CategoryTitleContainer>
        <MenuContainer>
          <ListContainer
            onMouseEnter={() => onMouseEnter()}
            onMouseLeave={onMouseLeave}
          >
            <Menu>
              <Span fontSize="16px"> {categoryTitle} </Span>
            </Menu>
            {dropdownCategory && (
              <Dropdown categoryItems={categoryItems} nowPage="category" />
            )}
          </ListContainer>
          <ListContainer>
            <CustomDate />
          </ListContainer>
        </MenuContainer>
        <LectureViewContainer>
          <LectureGird>
            {results &&
              results.length > 0 &&
              results.map(item => {
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
                    id={id}
                    type="getImage"
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
        {results && results.length === 0 && (
          <Message text="아직 개설된 강연이 없습니다! :(" color="#000000" />
        )}
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
  categoryItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  results: PropTypes.arrayOf(),
};

LecturePresenter.defaultProps = {
  results: null,
};
export default LecturePresenter;
