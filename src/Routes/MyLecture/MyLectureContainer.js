import React from 'react';
import { useParams } from 'react-router-dom';
import MyLecture from './MyLecturePresenter';

const MyLectureContainer = props => {
  const params = useParams();
  console.log(`lecture${params.mylecture}`);
  return <MyLecture param={params.mylecture} />;
};

export default MyLectureContainer;
