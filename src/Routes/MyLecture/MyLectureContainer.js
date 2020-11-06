import React from 'react';
import { useParams } from 'react-router-dom';
import MyLecture from './MyLecturePresenter';

const MyLectureContainer = props => {
  const params = useParams();
  console.group(JSON.stringify(params));
  console.log(`lecture${params.mylecturetab}`);
  return <MyLecture param={params.mylecturetab} />;
};

export default MyLectureContainer;
