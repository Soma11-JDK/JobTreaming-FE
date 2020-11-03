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
      <Route path="/mylectureroom/:mylecture" component={MyLecture} />
      <Route path="/mylectureroom/:mylikelecture" component={MyLecture} />
      <Route path="/mylectureroom/:myreview" component={MyLecture} />
      <Route path="/mylectureroom/:myquestion" component={MyLecture} />
      <Route path="/tutor/:tutor" component={Tutor} />
      <Route path="/tutor/:proceeding" component={Tutor} />
      <Route path="/tutor/:finish" component={Tutor} />
      <Route path="/tutor/:review" component={Tutor} />
      <Redirect from="*" to="/" />
    </Switch>
  </ScrollToTop>
);
