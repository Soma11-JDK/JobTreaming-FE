import React from 'react';
import { useLocation } from 'react-router-dom';
import { lectureApi } from 'api';
import authHeader from 'Services/auth-header';
import LectureDetail from './LectureDetailPresenter';

const LectureDetailContainer = props => {
  const location = useLocation();

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
    const url =
      'http://streaming.jobtreaming.com?lectureId=1&jwt=' +
      'BEARER ' +
      'eyJyZWdEYXRlIjoxNjA1MDczNjY5ODkwLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjA3NjY1NjY5LCJlbWFpbCI6InRlc3QyQHRlc3QudGVzdCJ9.z8eLFCsuP4iRFlErgelgoxlo7V3_BgYj4LJqh68c3B0';
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
  return <LectureDetail joinLecture={joinLecture} location={location} />;
};

export default LectureDetailContainer;
