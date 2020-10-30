import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';

const AppRoutes = () => {
    return (
      <Switch>
        <Route path="/users" exact component={Main} />
      </Switch>
    );
}
  
export default AppRoutes;