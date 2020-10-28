import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Login from '../pages/Login/Login';
import Main from '../pages/Main/Main';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/users" exact component={Main} isPrivate />
      <Route path="/" component={() => <Redirect to="/users" />} />
    </Switch>
  );
}