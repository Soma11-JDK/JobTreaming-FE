import React from 'react';
import { useParams } from 'react-router-dom';
import MyPage from './MyPagePresenter';

const MyPageContainer = props => {
  const params = useParams();
  console.group(JSON.stringify(params));
  console.log(`mypage${params}`);
  return <MyPage param={params.mypagetab} />;
};

export default MyPageContainer;
