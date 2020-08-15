import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Home, Login } from './index';

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={Login} />
    <Redirect from="*" to="/" />
  </Switch>
);
