import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const PolygonUrl = require('assets/Polygon 3.png');

const PolygonIcon = styled.img`
  margin-right: 10px;
`;

const Span = styled.div`
  font-size: 36px;
  font-weight: bold;
`;

const Subtitle = ({ title }) => {
  return (
    <Container>
      <PolygonIcon src={PolygonUrl} />
      <Span> {title}</Span>
    </Container>
  );
};

Subtitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Subtitle;
