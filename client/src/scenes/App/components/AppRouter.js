import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../../../scenes/Home'

class MainLayout extends Component {
  render() {
    return (
      <Switch>       
        <Route path='/home' component={HomePage} />
        <Redirect from='*' to='/home' />
      </Switch>
    );
  }
}

export default MainLayout;
