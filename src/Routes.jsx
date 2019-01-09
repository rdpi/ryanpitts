import React from 'react';
import { Route, Switch } from 'react-router';
import Welcome from './containers/Welcome';
import Education from './containers/Education';
import Projects from './containers/Projects';
import About from './containers/About';
import Skills from './containers/Skills';
import Contact from './containers/Contact';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/education" component={Education} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/about" component={About} />
    <Route exact path="/skills" component={Skills} />
    <Route exact path="/contact" component={Contact} />
  </Switch>

);
export default Routes;
