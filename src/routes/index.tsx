import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../../src/pages/SignIn/Index';
import SignUp from '../../src/pages/SignUp/Index';

import Dashboard from '../../src/pages/Dashboard/index';


const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate/>
    </Switch>
  );
};

export default Routes;
