import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Emoji from '../common/Emoji';
import CurrencyFormat from '../common/CurrencyFormat';

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
  display: flex;
  display: -webkit-flex;
  align-items: center;
  cursor: pointer;
  -webkit-filter: ${props => props.filterValue};
  filter: gray;
  ${marginTop}
`;

const ImageContainer = styled.div`
  height: 100%;
`;

const InfoContainer = styled.div`
  ${marginTop}
  ${marginLeft}
  height: 100%;

  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  align-items: space-between;
`;

const Image = styled.img`
  width: 100%;
  min-height: 105px;
`;

const TimeContainer = styled.div`
  width: 100%;
  height: 30px;
  background-color: #ff584d;
  border-radius: 41px;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  max-width: 180px;
  min-width: 140px;
`;

const Time = styled.span`
  margin-right: 10px;
  font-size: 1.5vw;
  font-weight: bold;
  @media only screen and (max-width: 600px) {
    font-size: 2vw;
  }
`;

const LectureInfoContainer = styled.div`
  width: 100%;
`;

const TutorInfoSpan = styled.span`
  display: flex;
  ${marginTop}
  color: #000000;
  word-break: keep-all;
  align-items: center;
  width: 100%;
  opacity: 0.8;
  font-size: 1.5vw;
  font-weight: bold;
  text-align: left;
  color: #000000;
`;

const TitleSpan = styled.span`
  font-size: 2vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  word-break: keep-all;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
  ${marginTop}
`;

const Button = styled.button`
  max-width: 200px;
  width: 100%;
  height: 36px;
  background-color: #ffffff;
  opacity: 0.4;
  border-radius: 22px;
  border: solid 1px #000000;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  ${marginTop}
`;

const ButtonSpan = styled.span`
  opacity: 0.8;
  font-weight: 500;
  color: #000000;
  word-break: keep-all;
`;

const PriceInfoContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  word-break: keep-all;
  ${marginTop}
`;

const PaymentInfo = styled.span`
  opacity: 0.8;
  font-size: 1.5vw;
`;

const Price = styled.span`
  font-size: 2vw;
  font-weight: bold;
`;

const DepositContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const DepositSpan = styled.span`
  font-size: 2vw;
  font-weight: bold;
  color: ${props => props.fontColor};
`;

const DeadlineSpan = styled.span`
  font-size: 0.8vw;
  font-weight: 500;
  color: #000000;
  ${marginBottom}
`;

const HorizontalPayment = ({
  id,
  imageUrl,
  expert,
  category,
  title,
  endTime,
  price,
  payCheck,
  payDate,
  payDeadline,
  finishCheck,
}) => (
  <Link to={`/lecturedetail/${id}`}>
    <Container
      filterValue={finishCheck && 'grayscale(100%)'}
      marginTopValue="20px"
    >
      <ImageContainer>
        <Image src={imageUrl} />
      </ImageContainer>
      <InfoContainer marginTopValue="10px" marginLeftValue="10px">
        <TimeContainer>
          <Emoji size="20px" label="clock" symbol="⏰" />
          <Time> &nbsp;{endTime}</Time>
        </TimeContainer>
        <LectureInfoContainer>
          <TutorInfoSpan marginTopValue="10px">
            {expert} . {category}
          </TutorInfoSpan>
          <TitleSpan>{title}</TitleSpan>
        </LectureInfoContainer>
        <PriceInfoContainer marginTopValue="10px">
          <PaymentInfo>무통장입금 {payDate}</PaymentInfo>
          <Price>
            <CurrencyFormat price={price} />
          </Price>
        </PriceInfoContainer>
      </InfoContainer>
      <DepositContainer>
        {payCheck ? (
          <DepositSpan fontColor="#ff584d"> 결제 완료</DepositSpan>
        ) : (
          <>
            <DepositSpan fontColor="#ff584d">입금 대기</DepositSpan>
            <DeadlineSpan marginBottomValue="15px">
              {payDeadline}까지 입금
            </DeadlineSpan>
          </>
        )}

        <ButtonContainer marginTopValue="5px">
          <Button>
            <ButtonSpan>{finishCheck ? '후기 작성' : '문의/기대평'}</ButtonSpan>
          </Button>
          {payCheck && (
            <Button marginTopValue="5px">
              <ButtonSpan>
                {finishCheck ? '강의 재청원' : '강의 취소'}
              </ButtonSpan>
            </Button>
          )}
        </ButtonContainer>
      </DepositContainer>
    </Container>
  </Link>
);

HorizontalPayment.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  expert: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  finishCheck: PropTypes.bool,
  price: PropTypes.number,
  payDate: PropTypes.string,
  payDeadline: PropTypes.string,
  payCheck: PropTypes.bool.isRequired,
};

HorizontalPayment.defaultProps = {
  finishCheck: false,
  price: 0,
  payDate: '',
  payDeadline: '',
};

export default HorizontalPayment;
