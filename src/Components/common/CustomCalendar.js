/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Calendar from 'react-calendar';

import styled from 'styled-components';
import moment, { Moment as MomentTypes } from 'moment';
import { generatePath } from 'react-router-dom';

const Container = styled.div`
  user-select: none;

  min-width: 180px;
`;

const Head = styled.div`
  display: flex;
  display: -webkit-flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding: 12px 8px;
`;

const Title = styled.span`
  border-radius: 5px;
  padding: 4px 12px;
`;

const Body = styled.div``;

const Row = styled.div`
  display: flex;

  &:first-child {
    .box {
      font-weight: bold;
    }
  }
`;
const Box = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  height: 0;
  padding-bottom: calc(100% / 8);
  @media only screen and (max-width: 600px) {
    width: 50%;
  }
  font-size: 1.2vw;
  &:first-child {
    color: red;
  }
  &:last-child {
    color: #588dff;
  }
  &.grayed {
    color: gray;
  }
  &.selected {
    span.text {
      background-color: #588dff;
      color: white;
    }
  }
`;

const Day = styled.span`
  border-radius: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 60%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function CustomCalendar() {
  const [value, setValue] = useState(new Date());

  function generate() {
    const today = moment();
    const startWeek = today.clone().startOf('month').week();
    const endWeek =
      today.clone().endOf('month').week() === 1
        ? 53
        : today.clone().endOf('month').week();
    const calendar = [];
    for (let week = startWeek; week <= endWeek; week += 1) {
      calendar.push(
        <Row>
          {Array(7)
            .fill(0)
            .map((n, i) => {
              const current = today
                .clone()
                .week(week)
                .startOf('week')
                .add(n + i, 'day');
              const isSelected =
                today.format('YYYYMMDD') === current.format('YYYYMMDD')
                  ? 'selected'
                  : '';
              const isGrayed =
                current.format('MM') === today.format('MM') ? '' : 'grayed';
              return (
                <Box className={`box  ${isSelected} ${isGrayed}`} key={i}>
                  <Day className="text" key={n + i}>
                    {current.format('D')}
                  </Day>
                </Box>
              );
            })}
        </Row>,
      );
    }
    return calendar;
  }
  return (
    <Container>
      <Head>
        <Title>{moment().format('YYYY MMMM')}</Title>
      </Head>
      <Body>
        <Row>
          <Box className="box">
            <Day className="text">SUN</Day>
          </Box>
          <Box className="box">
            <Day>MON</Day>
          </Box>
          <Box className="box">
            <Day>TUE</Day>
          </Box>
          <Box className="box">
            <Day>WED</Day>
          </Box>
          <Box className="box">
            <Day>THU</Day>
          </Box>
          <Box className="box">
            <Day>FRI</Day>
          </Box>
          <Box className="box">
            <Day>SAT</Day>
          </Box>
        </Row>
        {generate()}
      </Body>
    </Container>
  );
}

export default CustomCalendar;
