import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import {
  Home,
  Login,
  Lecture,
  Petition,
  Search,
  Write,
  ScrollToTop,
  MyLecture,
  Tutor,
  MyPage,
} from './index';

export default () => (
  <ScrollToTop>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/category/:id" component={Lecture} />
      <Route path="/petition" component={Petition} />
      <Route path="/search" component={Search} />
      <Route path="/write" component={Write} />
      <Route path="/mylectureroom/:mylecturetab" component={MyLecture} />
      <Route path="/tutor/:tutortab" component={Tutor} />
      <Route path="/mypage/:mypagetab/:notitab" component={MyPage} />
      <Route path="/mypage/:mypagetab" component={MyPage} />
      <Redirect from="*" to="/" />
    </Switch>
  </ScrollToTop>
);
