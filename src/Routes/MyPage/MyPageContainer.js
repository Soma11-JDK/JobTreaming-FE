import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import MyPage from './MyPagePresenter';

const MyPageContainer = props => {
  const params = useParams();
  const location = useLocation();
  console.log(`location: ${JSON.stringify(location)}`);
  console.log(`params: ${JSON.stringify(params.notitab)}`);
  console.log(`mypage${params.mypagetab}`);
  console.log(`mypage2${params.notitab}`);

  return <MyPage param={params.mypagetab} state={params.notitab} />;
};

export default MyPageContainer;
