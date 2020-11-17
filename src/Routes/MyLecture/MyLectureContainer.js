import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as userActions from 'redux/modules/user';
import { bindActionCreators } from 'redux';
import { lectureApi, baseURL } from 'api';
import withLogin from 'Components/LoginHOC';
import MyLecture from './MyLecturePresenter';

const MyLectureContainer = props => {
  const { user } = props;
  const [lectureList, setLecture] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMyLectureList = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const { data: result } = await lectureApi.myLectureList();
        console.log(`lectureListResult ${JSON.stringify(result)}`);

        const myLecture = result.map(item => {
          const temp = { ...item };
          temp.fileName = `${baseURL}/images/lecture/${item.fileName}`;
          return temp;

          // return getImage(fileName);
        });

        console.log(`changeTest: ${result.fileName}`);
        console.log(`changeResult: ${JSON.stringify(myLecture)}`);
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
  return (
    <MyLecture
      param={params.mylecturetab}
      myLectureList={lectureList}
      user={user}
    />
  );
};

MyLectureContainer.propTypes = {
  user: PropTypes.shape({
    get: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(
  state => ({
    user: state.user,
  }),
  dispatch => ({
    UserActions: bindActionCreators(userActions, dispatch),
  }),
)(withLogin(MyLectureContainer));
