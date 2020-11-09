import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { HashLink } from 'react-router-hash-link';
import CustomCalendar from 'Components/common/CustomCalendar';
import CurrencyFormat from 'Components/common/CurrencyFormat';
import { Link } from 'react-router-dom';

const marginTop = css`
  ${({ marginTopValue }) => marginTopValue && `margin-top : ${marginTopValue};`}
`;

const marginBottom = css`
  ${({ marginBottomValue }) =>
    marginBottomValue && `margin-bottom : ${marginBottomValue};`}
`;

const marginLeft = css`
  ${({ marginLeftValue }) =>
    marginLeftValue && `margin-left : ${marginLeftValue};`}
`;

const marginRight = css`
  ${({ marginRightValue }) =>
    marginRightValue && `margin-right : ${marginRightValue};`}
`;

const Container = styled.div`
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  width: 100%;
  padding: 0 10%;
  ${marginTop}
`;

const LeftContainer = styled.div`
  width: 80%;
  ${marginRight}
`;

const RightContainer = styled.div`
  width: 40%;
  box-shadow: 0 0 9px 3px rgba(164, 164, 164, 0.1);
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
`;

const TutorContainer = styled.div`
  width: 100%;
  background-color: #f7ebff;
  border-radius: 10px;
  object-fit: contain;
  display: flex;
  display: -webkit-flex;
  padding: 40px 20px 0 20px;
`;

const tutorImageUrl = require('assets/TestTutor/Tutor.png');

const TutorImage = styled.img`
  width: 50%;
  height: 50%;
`;

const TutorInfoContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Span = styled.span`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  opacity: ${props => props.fontopacity};
  color: ${props => props.color};
  word-break: keep-all;
  ${marginTop}
`;

const TabContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  ${marginTop}
`;

const List = styled.ul`
  width: 80%;
  display: flex;
`;

const Item = styled.li`
  width: 200px;
  height: 50px;
  text-align: center;
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled.a`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid ${props => props.color};
  opacity: ${props => props.fontopacity};
`;

const tabInfo = [
  { id: 0, title: '강의 소개', anchor: 'lecureintroduce' },
  { id: 1, title: '튜터 소개', anchor: 'tutorintroduce' },
  { id: 2, title: '수강생 후기', anchor: 'review' },
  { id: 3, title: '문의/기대평', anchor: 'question' },
];

const Section = styled.section`
  width: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  ${marginTop}
  ${marginBottom}
`;

const Line = styled.div`
  width: 100%;
  height: 0.8px;
  opacity: 0.8;
  background-color: #000000;
  ${marginTop}
`;

const Column = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100px;
`;

const Row = styled.div`
  display: flex;
  display: -webkit-flex;
  justify-content: space-around;
  align-items: center;
  ${marginTop}
`;

const BeforeSaleContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  justify-content: flex-end;
  ${marginTop}
`;

const Price = styled.span`
  font-size: 20px;
  opacity: 0.6;
  font-weight: 500;
  text-decoration: line-through;
`;

const SalePercentage = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #465fcc;
  ${marginLeft}
`;

const SalePrice = styled.span`
  font-size: 30px;
  font-weight: bold;
  display: flex;
  display: -webkit-flex;
  justify-content: flex-end;
  ${marginTop}
`;

const heartUrl = require('assets/WhiteHeart/WhiteHeart.png');

const HeartContainer = styled.button`
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #dfdfdf;
  width: 60px;
  height: 60px;
  ${marginRight}
`;

const HeartImage = styled.img``;

const ApplyButton = styled.button`
  border-radius: 10px;
  background-color: #ff584d;
  font-weight: bold;
  color: #000000;
  text-align: center;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  ${marginTop}
`;

const LectureDetailPresenter = ({ location }) => {
  const [tabTitle, setTabTitle] = useState('lecureintroduce');

  const handleClick = anchor => {
    return setTabTitle(anchor);
  };

  return (
    <Container marginTopValue="80px">
      <LeftContainer marginRightValue="30px">
        <TutorContainer>
          <TutorImage marginTop="50px" src={tutorImageUrl} />
          <TutorInfoContainer>
            <Span fontWeight="bold" fontSize="2vw">
              직장인을 위한 실용 파이썬 첫 걸음을 향해
            </Span>
            <Span fontSize="1.5vw" fontWeight="500">
              정보통신 . 이은아 멘토
            </Span>
            <Link to="/tutor/introduce">
              <Span fontSize="1.8vw" fontWeight="500">
                튜터 프로필 {'>'}
              </Span>
            </Link>
          </TutorInfoContainer>
        </TutorContainer>
        <TabContainer marginTopValue="10px">
          <List>
            {tabInfo.map(info => {
              const { id, title, anchor } = info;

              return (
                <Item key={id} onClick={() => handleClick(anchor)}>
                  <SLink
                    as={HashLink}
                    color={tabTitle === anchor ? '#3918ff' : '#000000'}
                    fontopacity={tabTitle === anchor ? '1' : '0.4'}
                    to={`${location.pathname}#${anchor}`}
                  >
                    <Span
                      fontSize="22px"
                      fontWeight="bold"
                      current={tabTitle === anchor ? 1 : 0}
                      color={tabTitle === anchor ? '#3918ff' : '#000000'}
                      fontopacity={tabTitle === anchor ? '1' : '0.5'}
                    >
                      {title}
                    </Span>
                  </SLink>
                </Item>
              );
            })}
          </List>
        </TabContainer>
        <Section id={tabInfo[0].anchor} marginTopValue="80px">
          <Span current fontWeight="bold" fontSize="28px">
            강의 소개
          </Span>
          <Line marginTopValue="5px" />
        </Section>
        <Section marginTopValue="80px">
          <Span fontWeight="bold" fontSize="28px">
            강의 내용
          </Span>
          <Line marginTopValue="5px" />
        </Section>
        <Section id={tabInfo[1].anchor} marginTopValue="80px">
          <Span fontWeight="bold" fontSize="28px">
            튜터 소개
          </Span>
          <Line marginTopValue="5px" />
        </Section>
        <Section id={tabInfo[2].anchor} marginTopValue="80px">
          <Span fontWeight="bold" fontSize="28px">
            수강생 후기
          </Span>
          <Line marginTopValue="5px" />
        </Section>
        <Section id={tabInfo[3].anchor} marginTopValue="80px">
          <Span fontWeight="bold" fontSize="28px">
            문의/기대평{' '}
          </Span>
          <Line marginTopValue="5px" />
        </Section>
      </LeftContainer>
      <RightContainer>
        <CustomCalendar />
        <Line marginTopValue="50px" />
        <Row marginTopValue="20px">
          <Column>
            <Span fontSize="18px" fontWeight="500">
              수강 인원
            </Span>
            <Span fontSize="22px" fontWeight="bold">
              8<Span fontopacity="0.4"> / 12</Span>
            </Span>
          </Column>
          <Column>
            <Span fontSize="18px" fontWeight="500">
              진행시간
            </Span>
            <Span fontSize="22px" fontWeight="bold">
              총 360분
            </Span>
          </Column>
        </Row>
        <Line marginTopValue="50px" />
        <BeforeSaleContainer marginTopValue="40px">
          <Price>
            <CurrencyFormat price={280000} />
          </Price>
          <SalePercentage marginLeftValue="10px">{20}%</SalePercentage>
        </BeforeSaleContainer>
        <SalePrice marginTopValue="10px">
          <CurrencyFormat price={280000} salePercentage={20} />
        </SalePrice>
        <Row marginTopValue="50px">
          <HeartContainer marginRightValue="10px">
            <HeartImage src={heartUrl} />
            2.6K
          </HeartContainer>
          <ApplyButton>수강신청하기</ApplyButton>
        </Row>
      </RightContainer>
    </Container>
  );
};

LectureDetailPresenter.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default LectureDetailPresenter;
