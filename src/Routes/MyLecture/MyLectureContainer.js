import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import * as userActions from 'redux/modules/user';
import { bindActionCreators } from 'redux';
import { lectureApi, baseURL } from 'api';
import withLogin from 'Components/LoginHOC';
import MyLecture from './MyLecturePresenter';

const MyLectureContainer = props => {
  const [lectureList, setLecture] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMyLectureList = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const { data: result } = await lectureApi.myLectureList();

        const myLecture = result.map(item => {
          const temp = { ...item };
          temp.fileName = `${baseURL}/images/lecture/${item.fileName}`;
          return temp;

          // return getImage(fileName);
        });

        setLecture(myLecture);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMyLectureList();
  }, []);

  const params = useParams();
  const user = useSelector(state => state.user);

  return (
    <MyLecture
      param={params.mylecturetab}
      myLectureList={lectureList}
      user={user.get('loggedInfo')}
    />
  );
};

export default connect(
  state => ({
    user: state.user,
  }),
  dispatch => ({
    UserActions: bindActionCreators(userActions, dispatch),
  }),
)(withLogin(MyLectureContainer));
