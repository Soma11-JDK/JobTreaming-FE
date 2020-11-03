import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Emoji from './common/Emoji';
import CurrencyFormat from './common/CurrencyFormat';

const marginTop = css`
  ${({ marginTopValue }) => marginTopValue && `margin-top : ${marginTopValue};`}
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
  ${marginTop}
`;

const ImageContainer = styled.div`
  height: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  align-content: space-between;
  min-width: 165px;
  min-height: 200px;
  ${marginTop};
  ${marginLeft};
`;

const InfoScoreContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;
`;

const InfoTopContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  min-height: 105px;
`;

const RatingContainer = styled.div`
  display: flex;
  display: -webkit-flex;
`;

const DateContainer = styled.span`
  opacity: 0.5;
  color: #000000;
  ${marginLeft}
`;

const ScoreContainer = styled.div`
  color: #000000;
  opacity: 0.5;
  font-weight: bold;
  ${marginTop}
`;

const star = require('assets/Star/Star.png');
const halfStar = require('assets/Star/HalfStar.png');

const StarContainer = styled.img``;

const ReviewContainer = styled.div`
  word-break: keep-all;
`;

const TitleContainer = styled.div`
  word-break: keep-all;
  font-weight: bold;
  opacity: 0.8;
  color: #000000;
`;

const HorizontalReview = ({
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
  imageUrl,
}) => (
  <Container marginTopValue="20px">
    <ImageContainer>
      <Image src={imageUrl} />
    </ImageContainer>
    <InfoContainer marginTopValue="10px" marginLeftValue="10px">
      <InfoScoreContainer>
        <InfoTopContainer>
          <RatingContainer>
            {Array(Math.floor(rating))
              .fill()
              .map((_, i) => (
                <StarContainer src={star} />
              ))}
            {rating % 1 > 0 && <StarContainer src={halfStar} />}
          </RatingContainer>
          <DateContainer marginLeftValue="5px">{date}</DateContainer>
        </InfoTopContainer>
        <ScoreContainer marginTopValue="5px">
          전문성 {expertScore} / 비용 {priceScore} / 전달력 {presentScore} /
          유익함 {beneficialScore} / 흥미도 {funScore} / 친절도 {kindScore}
        </ScoreContainer>
      </InfoScoreContainer>
      <ReviewContainer>
        {review.length > 150 ? `${review.substring(0, 150)}...` : review}
      </ReviewContainer>
      <TitleContainer>{title}</TitleContainer>
    </InfoContainer>
  </Container>
);

HorizontalReview.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  rating: PropTypes.number,
  expertScore: PropTypes.number,
  priceScore: PropTypes.number,
  presentScore: PropTypes.number,
  beneficialScore: PropTypes.number,
  funScore: PropTypes.number,
  kindScore: PropTypes.number,
  imageUrl: PropTypes.string.isRequired,
};

HorizontalReview.defaultProps = {
  rating: 0,
  expertScore: 0,
  priceScore: 0,
  presentScore: 0,
  beneficialScore: 0,
  funScore: 0,
  kindScore: 0,
};

export default HorizontalReview;
