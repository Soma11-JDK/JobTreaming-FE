import React from 'react';
import { useParams } from 'react-router-dom';
import Tutor from './TutorPresenter';

const TutorContainer = props => {
  const params = useParams();
  console.log(params);
  return <Tutor name="이은아" param={params.tutor} />;
};

export default TutorContainer;
