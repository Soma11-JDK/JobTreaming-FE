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
    const fetchCategoryItems = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const { data: result } = await lectureApi.myLectureList();
        setLecture(JSON.stringify({ result }));
        console.log(`lectureList ${JSON.stringify(result)}`);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategoryItems();
  }, []);

  const params = useParams();
  return <MyLecture param={params.mylecturetab} />;
};

export default withLogin(MyLectureContainer);
