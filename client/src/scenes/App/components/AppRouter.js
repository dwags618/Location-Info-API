import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../../../scenes/Home';
import LoginPage from '../../../scenes/Login'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

class MainLayout extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute exact path='/' component={HomePage} />
       
        <Route path='/login' component={LoginPage} />
       
        <Redirect from='*' to='/' />
      </Switch>
    );
  }
}

export default MainLayout;
