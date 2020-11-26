import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { lectureApi } from 'api';
import authHeader from 'Services/auth-header';
import LectureDetail from './LectureDetailPresenter';

const LectureDetailContainer = props => {
  const location = useLocation();
  const params = useParams();
  const [lectureDetail, setLecture] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchLectureDetail = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const parsedId = parseInt(params.id, 10);
        const { data: result } = await lectureApi.getLectureDetail(parsedId);
        console.log(
          `lectureListResult ${JSON.stringify(
            result.data,
          )} params: ${JSON.stringify(params.id)}`,
        );

        setLecture(result);

        console.log(`lectureList ${lectureDetail}`);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLectureDetail();
  }, []);
  const joinLecture = () => {
    /* parmas = {
      headers: {
        jwt:
          'BEARER ' +
          'eyJyZWdEYXRlIjoxNjA1MDczNjY5ODkwLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjA3NjY1NjY5LCJlbWFpbCI6InRlc3QyQHRlc3QudGVzdCJ9.z8eLFCsuP4iRFlErgelgoxlo7V3_BgYj4LJqh68c3B0',
      },
    }; */
    const test = authHeader();
    console.log(`header: ${JSON.stringify(test.Authorization)}`);
    const url = `https://streaming.jobtreaming.com?lectureId=${params.id}&jwt=${
      authHeader().Authorization
    }`;
    /* const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://streaming.jobtreaming.com/1');
    xhr.setRequestHeader(
      'jwt',
      'BEARER ' +
        'eyJyZWdEYXRlIjoxNjA1MDczNjY5ODkwLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjA3NjY1NjY5LCJlbWFpbCI6InRlc3QyQHRlc3QudGVzdCJ9.z8eLFCsuP4iRFlErgelgoxlo7V3_BgYj4LJqh68c3B0',
    );

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(); */
    window.open(url);
  };
  return (
    <LectureDetail
      lecture={lectureDetail}
      joinLecture={joinLecture}
      location={location}
    />
  );
};

export default LectureDetailContainer;
