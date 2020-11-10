import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import RadarChart from 'Components/common/RadarChart';

const marginTop = css`
  ${({ marginTopValue }) => marginTopValue && `margin-top : ${marginTopValue};`}
`;

const marginBottom = css`
  ${({ marginBottomValue }) =>
    marginBottomValue && `margin-bottom : ${marginBottomValue};`}
`;

const marginRight = css`
  ${({ marginRightValue }) =>
    marginRightValue && `margin-right : ${marginRightValue};`}
`;

const marginLeft = css`
  ${({ marginLeftValue }) =>
    marginLeftValue && `margin-left : ${marginLeftValue};`}
`;

const StatisticContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 440px;
  border-radius: 10px;
  box-shadow: 0 0 9px 3px rgba(164, 164, 164, 0.1);
  background-color: #ffffff;
  padding: 60px 40px;
  ${marginTop}
  ${marginLeft}
  ${marginRight}
`;

const StatisticLeftContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 40%;
`;

const ScoreLineContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  align-items: center;
  width: 100%;
`;

const ScoreDefaultBar = styled.div`
  height: 10px;
  flex: 1;
  max-width: 80px;
  justify-content: center;
  background-color: #f1f1f1;
  border-radius: 3px;
`;

const ScoreBar = styled.div`
  height: 10px;
  border-radius: 3px;
  background-color: #2a2a2a;
  width: ${props => props.scoreWidth};
`;

const SpanContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  align-items: center;
  white-space: pre-wrap;
  ${marginTop};
`;

const Span = styled.span`
  color: ${props => props.fontColor || '#000000'};
  font-weight: ${props => props.fontWeight || 500};
  font-size: ${props => props.fontSize || '28px'};
  word-break: keep-all;
  opacity: ${props => props.fontopacity || 1};
  ${marginTop}
  ${marginLeft}
`;

const star = require('assets/Star/Star.png');
const halfStar = require('assets/Star/HalfStar.png');

const StarContainer = styled.img`
  @media only screen and (max-width: 768px) {
    width: 1.5vw;
  }
  @media only screen and (max-width: 600px) {
    width: 1.2vw;
  }
`;

const Statistic = ({ chartTitle }) => {
  return (
    <StatisticContainer
      marginTopValue="50px"
      marginLeftValue="auto"
      marginRightValue="auto"
    >
      <StatisticLeftContainer>
        <Span>매우 추천합니다!</Span>
        <SpanContainer marginTopValue="10px">
          <Span marginLeftValue="5px" fontWeight="bold" fontSize="2vw">
            4.9
          </Span>
          <Span
            marginLeftValue="5px"
            fontWeight="bold"
            fontSize="2vw"
            fontColor="#999999"
          >
            / 5.0
          </Span>
          <Span fontSize="1vw"> (214명)</Span>
        </SpanContainer>
        <SpanContainer marginTopValue="10px">
          {Array(Math.floor(4.9))
            .fill()
            .map((_, i) => (
              <StarContainer src={star} />
            ))}
          {4.9 % 1 > 0 && <StarContainer src={halfStar} />}
        </SpanContainer>
        <ScoreLineContainer>
          <Span fontSize="18px"> 5점 </Span>
          <ScoreDefaultBar>
            <ScoreBar scoreWidth={`${(128 / 214) * 100}%`} />
          </ScoreDefaultBar>
          <Span fontSize="16px" fontopacity="0.7">
            (128명)
          </Span>
        </ScoreLineContainer>
        <ScoreLineContainer>
          <Span fontSize="18px"> 4점 </Span>
          <ScoreDefaultBar>
            <ScoreBar scoreWidth={`${(62 / 214) * 100}%`} />
          </ScoreDefaultBar>
          <Span fontSize="16px" fontopacity="0.7">
            (62명)
          </Span>
        </ScoreLineContainer>
        <ScoreLineContainer>
          <Span fontSize="18px"> 3점 </Span>
          <ScoreDefaultBar>
            <ScoreBar scoreWidth={`${(16 / 214) * 100}%`} />
          </ScoreDefaultBar>
          <Span fontSize="16px" fontopacity="0.7">
            (16명)
          </Span>
        </ScoreLineContainer>
        <ScoreLineContainer>
          <Span fontSize="18px"> 2점 </Span>
          <ScoreDefaultBar>
            <ScoreBar scoreWidth={`${(5 / 214) * 100}%`} />
          </ScoreDefaultBar>
          <Span fontSize="16px" fontopacity="0.7">
            (5명)
          </Span>
        </ScoreLineContainer>
        <ScoreLineContainer>
          <Span fontSize="18px"> 1점 </Span>
          <ScoreDefaultBar>
            <ScoreBar scoreWidth={`${(3 / 214) * 100}%`} />
          </ScoreDefaultBar>
          <Span fontSize="16px" fontopacity="0.7">
            (3명)
          </Span>
        </ScoreLineContainer>
      </StatisticLeftContainer>

      <RadarChart title={chartTitle} />
    </StatisticContainer>
  );
};

Statistic.propTypes = {
  chartTitle: PropTypes.string,
};

Statistic.defaultProps = {
  chartTitle: '',
};

export default Statistic;
