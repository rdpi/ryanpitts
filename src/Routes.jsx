import React from 'react';
import { Route, Switch } from 'react-router';
import Welcome from './containers/Welcome';
import Education from './containers/Education';
import Projects from './containers/Projects';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/education" component={Education} />
    <Route exact path="/projects" component={Projects} />
  </Switch>

);
export default Routes;
