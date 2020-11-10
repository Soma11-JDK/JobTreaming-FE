import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Setting from './SettingPresenter';

const MyPageContainer = props => {
  const params = useParams();
  const location = useLocation();

  return <Setting />;
};

export default MyPageContainer;
