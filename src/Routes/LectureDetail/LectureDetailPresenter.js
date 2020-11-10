/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { HashLink } from 'react-router-hash-link';
import CustomCalendar from 'Components/common/CustomCalendar';
import CurrencyFormat from 'Components/common/CurrencyFormat';
import { Link } from 'react-router-dom';
import Statistic from 'Components/review/Statistic';
import { reviewItems } from 'Routes/MyLecture/MyLecturePresenter';
import HorizontalReview from 'Components/lecture/HorizontalReview';

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

const padding = css`
  ${({ paddingValue }) => paddingValue && `padding : ${paddingValue}`}
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
  ${padding}
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
          <Span current fontWeight="bold" fontSize="28px" paddingValue="10px">
            강의 소개
          </Span>
          <Line marginTopValue="5px" />
          <Span
            marginTopValue="10px"
            fontSize="18px"
            fontWeight="500px"
            paddingValue="10px"
          >
            은행 직원부터 기상청 공무원까지,
            <br /> 이미 많은 평범한 직장인들이 이 클래스를 통해 파이썬에
            입문했습니다.
            <br />
            <br /> 대한민국 모든 직장인들을 위해 준비한 파이썬 데이터 분석 기초
            강의!
            <br /> "이제 우리, 엑셀 대신 파이썬해요"
            <br />
            <br />
            파이썬으로 하는 보고서 작성, 업무자동화, 데이터분석!
            <br /> 엑셀 대신 파이썬을 다루고 싶은 직장인,
            <br /> 새로운 기술에 관심이 많은 20-30대 직장인 환영이에요.
          </Span>
        </Section>
        <Section marginTopValue="80px">
          <Span fontWeight="bold" paddingValue="10px" fontSize="28px">
            강의 내용
          </Span>
          <Line marginTopValue="5px" />
          <Span
            marginTopValue="10px"
            fontSize="18px"
            fontWeight="500px"
            paddingValue="10px"
          >
            파이썬은 배우기 쉽고 많은 분야에 사용될 수 있는 아주 대중적인
            프로그래밍 언어입니다.
            <br /> 잠깐, '프로그래밍' 이라는 말 때문에 벌써 머리가 아프신가요?
            나랑 별로 관계 없다고 들리시나요? 그렇지 않습니다!
            <br />
            <br /> 무슨 일을 하든 '데이터' 의 필요성이 커지면서, '데이터 분석'
            의 중요성도 커지는 추세입니다.
            <br /> 특히 대부분의 기업에서는 사내 데이터를 이전과 달리 완전히
            체계화/전산화하는 프로젝트가 이뤄지고 있으며, 가까운 날, 우리 모두는
            '데이터 분석가' 가 되어야 할 것입니다.
            <br /> (어느 정도는 말이죠)
            <br />
            <br /> 이 '데이터 분석' 일을 가장 손쉽게 수행해줄 수 있고, 또
            입문자도 빠르게 배울 수 있는 언어가 바로 '파이썬' 입니다. 파이썬은
            원래 교육용으로 설계되었기 때문에 '심플함' 을 철학으로 합니다. 이
            때문에 초보자부터 전문가까지 많은 사람들이 사랑하는 프로그래밍
            언어입니다.
            <br />
            <br /> 이 클래스에서는 데이터 분석에 가장 많이 쓰이는 파이썬, 그
            중에서도 가장 많이 쓰이는 방법인 판다스 pandas 를 중심으로 하는
            데이터 분석 기초를 배웁니다.
            <br /> 저는 프로그래밍을 전혀 모르는 마케터에서 출발해, 데이터
            기반의 분석과 전략 업무를 수행하는 그로스해커로 커리어를 전향해서,
            지금까지 수십번의 강의를 통해 비전공자/일반인/직장인이 파이썬을
            익히는 일을 도와왔습니다.
          </Span>
        </Section>
        <Section id={tabInfo[1].anchor} marginTopValue="80px">
          <Span fontWeight="bold" paddingValue="10px" fontSize="28px">
            튜터 소개
          </Span>
          <Line marginTopValue="5px" />
          <Span
            marginTopValue="10px"
            fontSize="18px"
            fontWeight="500px"
            paddingValue="10px"
          >
            이은아 (그로스해커)
            <br />• 키즈 & 패밀리 패션 플랫폼 MOOMOOZ 그로스해커
            <br /> • 앰노베이션 마케터
            <br /> • Performance by TBWA 마케팅 매니저
            <br /> • 마케터를 위한 파이썬(출간예정)
            <br /> • 파이썬 블로그 운영 https://workingwithpython.com
            <br />• 패스트캠퍼스, 모비아카데미, 러닛, 탈잉, 숨고 등에서 파이썬
            강의 진행
          </Span>
        </Section>
        <Section id={tabInfo[2].anchor} marginTopValue="80px">
          <Span fontWeight="bold" paddingValue="10px" fontSize="28px">
            수강생 후기
          </Span>
          <Line marginTopValue="5px" />
          <Statistic />
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
                username="취준 화이팅"
              />
            );
          })}
        </Section>
        <Section id={tabInfo[3].anchor} marginTopValue="80px">
          <Span fontWeight="bold" paddingValue="10px" fontSize="28px">
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
