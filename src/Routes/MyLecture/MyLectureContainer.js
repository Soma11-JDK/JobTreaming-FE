import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import withLogin from 'Components/LoginHOC';
import { lectureApi } from 'api';
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
        console.log(`lectureListResult ${JSON.stringify(result.data)}`);

        setLecture(result);

        console.log(`lectureList ${lectureList}`);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMyLectureList();
  }, []);

  const params = useParams();
  return <MyLecture param={params.mylecturetab} myLectureList={lectureList} />;
};

export default withLogin(MyLectureContainer);
