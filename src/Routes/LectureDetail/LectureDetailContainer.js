import React from 'react';
import { useLocation } from 'react-router-dom';
import LectureDetail from './LectureDetailPresenter';

const LectureDetailContainer = props => {
  const location = useLocation();
  return <LectureDetail location={location} />;
};

export default LectureDetailContainer;
