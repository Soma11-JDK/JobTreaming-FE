import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Heart = styled.img`
  cursor: pointer;
  z-index: 10;
  position: absolute;
  width: auto;
  height: auto;
  top: 0;
  margin-top: 0.5%;
  margin-left: 1vw;
`;

const ImageContainer = styled.div`
  height: auto;
`;

const Image = styled.img`
  width: 100%;
`;

const InfoTopContainer = styled.div`
  height: 30px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  align-content: center;

  ${InfoTopContainer} {
    display: flex;
  }
`;

const InfoMidContainer = styled.div`
  display: flex;
  height: 56px;
`;

const InfoBottomContainer = styled.div`
  display: flex;
  height: 30px;
`;

const Span = styled.span.attrs(props => ({
  role: 'img',
}))`
  display: flex;
  font-size: 22px;
  color: #000000;
  word-break: keep-all;
  align-items: center;
  width: 100%;
  .expert {
    font-size: 1.2vw;
    font-weight: bold;
  }
  .title {
    margin-right: 10px;
    font-size: 1.5vw;
  }
  .price {
    font-size: 1.2vw;
    opacity: 0.5;
    flex: 1;
    margin-right: 5px;
    text-decoration: line-through;
  }
  .salePercentage {
    font-size: 1.2vw;
    color: #465fcc;
    flex: 1;
  }
  .salePrice {
    font-size: 1.8vw;
    font-weight: bold;
    flex: 3;
    justify-content: flex-end;
    margin-right: 15px;
  }
  .endTime {
    width: 100%;
    justify-content: center;
    height: 23px;
    margin-right: 10px;
    border-radius: 41px;
    background-color: #ff584d;
    font-size: 1vw;
    font-weight: bold;
    max-width: 130px;
    min-width: 65px;
  }
`;

const LecturePreview = ({
  id,
  imageUrl,
  heartUrl,
  expert,
  category,
  endTime,
  title,
  price,
  salePercentage,
}) => (
  <Container>
    <ImageContainer>
      <Image src={imageUrl} />
      <Heart src={heartUrl} />
    </ImageContainer>
    <InfoContainer>
      <InfoTopContainer>
        <Span>
          <Span className="expert">
            {expert} . {category}
          </Span>
          <Span className="endTime">
            <span role="img" aria-label="time">
              ⏰ {endTime}
            </span>
          </Span>
        </Span>
      </InfoTopContainer>
      <InfoMidContainer>
        <Span>
          <Span className="title">{title}</Span>
        </Span>
      </InfoMidContainer>
      <InfoBottomContainer>
        <Span>
          <Span className="price">{price}</Span>
          <Span className="salePercentage">{salePercentage}%</Span>
          <Span className="salePrice">
            {(price * (100 - salePercentage)) / 100}
          </Span>
        </Span>
      </InfoBottomContainer>
    </InfoContainer>
  </Container>
);

LecturePreview.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  heartUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  expert: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  salePercentage: PropTypes.number.isRequired,
};

export default LecturePreview;
