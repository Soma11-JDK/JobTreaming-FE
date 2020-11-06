import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import ImageTab from 'Components/common/ImageTab';
import Testairbnb from 'Components/Testairbnb';
import HorizontalPayment from 'Components/HorizontalPayment';

import { items } from '../Home/HomePresenter';

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

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  padding: 0px 80px;
  ${marginTop}
`;

const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${marginBottom}
`;

const profileImageUrl = require('assets/TestProfile/Mask Group.png');

const ProfileImageContainer = styled.div`
  position: relative;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
`;

const Username = styled.span`
  font-family: Roboto;
  font-size: 28px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  ${marginTop}
`;

const settingImageUrl = require('assets/SettingIcon/Setting.png');

const SettingImage = styled.img`
  position: absolute;
  bottom: 0px;
  right: -10px;
`;

const paymentImageUrl = require('assets/Payment/PaymentIcon.png');
const noClickPaymentImageUrl = require('assets/Payment/noClickPaymentIcon.png');

const notiImageUrl = require('assets/Notification/Noti.png');
const noClickNotiImageUrl = require('assets/Notification/noClickNoti.png');

const tabInfo = [
  {
    activeIcon: paymentImageUrl,
    noActiveIcon: noClickPaymentImageUrl,
    title: '결제 내역',
    state: 'payment',
  },
  {
    activeIcon: notiImageUrl,
    noActiveIcon: noClickNotiImageUrl,
    title: '전체 알림',
    state: 'notification',
  },
];

const TabContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  ${marginTop}
`;

const polygonUrl = require('assets/Polygon 3.png');

const IndexContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  align-items: center;
  ${marginTop}
  ${marginBottom}
`;

const LectureViewContainer = styled.div`
  width: 100%;
  height: 100%;
  ${marginBottom}
`;

const IndexIcon = styled.img`
  width: 27px;
  height: 27px;
`;

const SpanContainer = styled.div`
  display: flex;
  ${marginTop}
`;

const Span = styled.span`
  color: ${props => props.textColor};
  font-weight: bold;
  font-size: 28px;
  ${marginLeft}
`;

const MyPagePresenter = ({ param }) => {
  return (
    <Container marginTopValue="80px" marginBottomValue="80px">
      <ProfileContainer marginBottomValue="20px">
        <ProfileImageContainer>
          <ProfileImage src={profileImageUrl} />
          <SettingImage src={settingImageUrl} />
        </ProfileImageContainer>
        <Username marginTopValue="10px">eunhye_22</Username>
      </ProfileContainer>
      <TabContainer marginTopValue="20px">
        <ImageTab tabInfo={tabInfo} nowTab={param} nowPage="myPage" />
      </TabContainer>
      {param === 'payment' && (
        <>
          <IndexContainer marginTopValue="30px" marginBottomValue="30px">
            <IndexIcon src={polygonUrl} />
            <Span fontSize="36px" fontWeight="bold" marginLeftValue="5px">
              결제 내역
            </Span>
          </IndexContainer>
          <Testairbnb />
          <LectureViewContainer marginBottomValue="60px">
            {items.map(item => {
              const {
                id,
                expert,
                category,
                endTime,
                title,
                url,
                price,
                payCheck,
                payDeadline,
                finishCheck,
              } = item;
              return (
                <HorizontalPayment
                  key={id}
                  id={id}
                  imageUrl={url}
                  expert={expert}
                  category={category}
                  title={title}
                  endTime={endTime}
                  price={price}
                  payCheck={payCheck}
                  payDeadline={payDeadline}
                  finishCheck={finishCheck}
                />
              );
            })}
          </LectureViewContainer>
          <SpanContainer marginTopValue="36px">
            <Span textColor="#000000">수강 완료한 강의</Span>
          </SpanContainer>
          <LectureViewContainer marginBottomValue="60px">
            {items.map(item => {
              const {
                id,
                expert,
                category,
                endTime,
                title,
                url,
                price,
                payCheck,
                payDeadline,
                finishCheck,
              } = item;
              return (
                <HorizontalPayment
                  key={id}
                  id={id}
                  imageUrl={url}
                  expert={expert}
                  category={category}
                  title={title}
                  endTime={endTime}
                  price={price}
                  payCheck
                  payDeadline={payDeadline}
                  finishCheck
                />
              );
            })}
          </LectureViewContainer>
        </>
      )}
    </Container>
  );
};

MyPagePresenter.propTypes = {
  param: PropTypes.string.isRequired,
};

export default MyPagePresenter;
