import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from 'Routes/Home/HomePresenter';
import Header from './Header';

export default () => (
  <Router>
    <>
      <Header />
    </>
  </Router>
);
