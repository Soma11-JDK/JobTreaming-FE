import React from 'react';
import { useParams } from 'react-router-dom';
import MyLecture from './MyLecturePresenter';

const MyLectureContainer = props => {
  const params = useParams();

  return <MyLecture param={params.mylecture} />;
};

export default MyLectureContainer;
