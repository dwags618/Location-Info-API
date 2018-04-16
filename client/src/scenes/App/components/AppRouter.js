import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../../../scenes/Home';
import WordPage from '../../../scenes/Word'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    (
      <Redirect to={{
        pathname: '/word',
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
       
        <Route path='/word' component={WordPage} />
       
        <Redirect from='*' to='/' />
      </Switch>
    );
  }
}

export default MainLayout;
