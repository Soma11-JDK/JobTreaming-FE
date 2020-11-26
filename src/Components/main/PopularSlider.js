/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import LecturePreview from 'Components/lecture/LecturePreview';

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

  width: 100%;
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
    console.log(`slideItems ${JSON.stringify(items)}`);
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
              expertName,
              category,
              endedAt,
              title,
              price,
              salePercentage,
              fileName,
            } = item;
            return (
              <LecturePreview
                type="getImage"
                key={id}
                id={id}
                imageUrl={fileName}
                heartUrl={heartUrl}
                expert={expertName}
                category={category}
                endedAt={endedAt}
                title={title}
                price={price}
                salePercentage={salePercentage}
              />
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
