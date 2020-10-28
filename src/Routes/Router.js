import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Home, Login, Lecture, Petition, Search } from './index';

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/category/:id" component={Lecture} />
    <Route path="/petition" component={Petition} />
    <Route path="/search" component={Search} />
    <Redirect from="*" to="/" />
  </Switch>
);
