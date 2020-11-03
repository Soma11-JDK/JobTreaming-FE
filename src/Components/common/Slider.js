/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    text-align: center;
    justify-content: center;
  }
`;

const SliderArrow = styled.div`
  position: absolute;
  z-index: 3;
  height: 100%;
  width: 100%;
  padding: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const arrowLeft = require('assets/Arrow/ArrowLeft@3x.png');
const arrowRight = require('assets/Arrow/ArrowRight.png');

const ArrowBtn = styled.div`
  cursor: pointer;
`;

const ArrowImg = styled.img`
  width: 48px;
  height: 48px;
`;

const ImageContainer = styled.div``;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const ProgressContainer = styled.div`
  z-index: 10;
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  padding-right: 10%;
  bottom: 4vw;
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  -webkit-appearance: none;
  ::-webkit-slider-runnable-track {
    width: fit-content;
    height: 2vw;
    cursor: pointer;
    background: #e3e3e3;
    border-radius: 10px;
  }
  ::-webkit-slider-thumb {
    height: 2vw;
    width: 20%;
    background: #465fcc;
    cursor: pointer;
    -webkit-appearance: none;
    box-shadow: -100vw 0 0 100vw #465fcc;
    border-radius: 10px;
  }
  ::-moz-range-track {
    width: 100%;
    cursor: pointer;
    background: #e3e3e3;
    border-radius: 10px;
  }
  ::-moz-range-thumb {
    height: 2vw;
    width: 20%;
    background: #465fcc;
    cursor: pointer;
    box-shadow: -100vw 0 0 100vw #465fcc;
    border-radius: 10px;
  }
`;

const Span = styled.span`
  font-size: 1rem;
  font-weight: 500;
  margin-left: 9px;
  @media only screen and (max-width: 600px) {
    font-size: 1em;
  }
`;

const smallBanner = require('assets/Banner.png');
const mediumBanner = require('assets/Banner2x.png');
const largeBanner = require('assets/Banner3x.png');

const items = [
  { id: 1, small: smallBanner, medium: mediumBanner, large: largeBanner },
  { id: 2, small: smallBanner, medium: mediumBanner, large: largeBanner },
  { id: 3, small: smallBanner, medium: mediumBanner, large: largeBanner },
  { id: 4, small: smallBanner, medium: mediumBanner, large: largeBanner },
  { id: 5, small: smallBanner, medium: mediumBanner, large: largeBanner },
  { id: 6, small: smallBanner, medium: mediumBanner, large: largeBanner },
];
export default class ReactCustomArrow extends Component {
  constructor() {
    super();
    this.state = {
      currentSlide: 0,
    };
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
    let { currentSlide } = this.state;
    // 슬라이더 세팅
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autopalySpeed: 2000,
      beforeChange: (current, next) => this.setState({ currentSlide: next }),
    };
    return (
      <Container>
        <ProgressContainer>
          <Input
            onChange={e => this.slider.slickGoTo(e.target.value)}
            value={currentSlide}
            type="range"
            min={0}
            max={items.length - 1}
          />
          <Span>
            0{currentSlide + 1} / 0{items.length}
          </Span>
        </ProgressContainer>
        {this.renderArrows()}
        <StyledSlider
          ref={slider => {
            this.slider = slider;
          }}
          {...settings}
          style={{ padding: 0 }}
        >
          {items.map(item => {
            currentSlide = item.id;
            const { small, medium, large } = item;
            return (
              <div key={item.id}>
                <ImageContainer>
                  <Image
                    src={small}
                    srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w`}
                  />
                </ImageContainer>
              </div>
            );
          })}
        </StyledSlider>
      </Container>
    );
  }
}
