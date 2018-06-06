import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Index from './Index';
import Page from './Page';
import PageTwo from './PageTwo';

const Root = () => (
  <Router history={browserHistory}>
    <Route path='/' component={Index}>
      <Route path='/page' component={Page} />
      <Route path='/page-two' component={PageTwo} />
    </Route>
  </Router>
);

export default Root;
