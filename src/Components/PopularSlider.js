/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    cursor: pointer;
  }
`;

const SliderArrow = styled.div`
  position: absolute;
  z-index: 3;
  width: 95%;
  padding: 5% 0;
  right: 0;
  left: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const arrowLeft = require('assets/Arrow/ArrowLeft.png');
const arrowRight = require('assets/Arrow/ArrowRight.png');

const ArrowBtn = styled.div`
  cursor: pointer;
`;

const ArrowImg = styled.img``;

const heartUrl = require('assets/Heart/Heart.png');

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

export default class PopularSlider extends Component {
  constructor() {
    super();
    this.state = {};
  }

  renderArrows = () => {
    return (
      <SliderArrow>
        <ArrowBtn
          className="arrow-btn prev"
          onClick={() => this.slider.slickPrev()}
        >
          <ArrowImg src={arrowLeft} alt="leftArrow" />
        </ArrowBtn>
        <ArrowBtn onClick={() => this.slider.slickNext()}>
          <ArrowImg src={arrowRight} alt="RightArrow" />
        </ArrowBtn>
      </SliderArrow>
    );
  };

  render() {
    const { items } = this.props;
    // 슬라이더 세팅
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      autopalySpeed: 2000,
    };
    return (
      <Container>
        {this.renderArrows()}
        <StyledSlider
          ref={slider => {
            this.slider = slider;
          }}
          {...settings}
          style={{ padding: 0, cursor: 'pointer' }}
        >
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
              <div key={id}>
                <ImageContainer>
                  <Image src={url} />
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
                      <Span className="salePrice">{price}</Span>
                    </Span>
                  </InfoBottomContainer>
                </InfoContainer>
              </div>
            );
          })}
        </StyledSlider>
      </Container>
    );
  }
}

PopularSlider.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
