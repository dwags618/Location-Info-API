import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';

class ConfirmNavigation extends React.Component {
  constructor () {
    super();
    this.state = {
      nextLocation: null,
      confirmed: false
    };
    this.handleConfirmNavigation = this.handleConfirmNavigation.bind(this);
    this.handleCancelNavigation = this.handleCancelNavigation.bind(this);
    this.handlePopState = this.handlePopState.bind(this);
    this.routerWillLeave = this.routerWillLeave.bind(this);
  }

  handleConfirmNavigation () {
    let nextLocation = this.state.nextLocation;
    let action = nextLocation.action.toLowerCase();
    let router = this.props.router;
    let onConfirmNavigation = this.component.props.onConfirmNavigation ||
      this.component.onConfirmNavigation;

    if (onConfirmNavigation) {
      onConfirmNavigation(nextLocation);
    }

    this.setState({
      confirmed: true
    }, () => {
      if (router[action]) {
        router[action](nextLocation.pathname);
      } else {
        router.push(nextLocation.pathname);
      }
    });
  }

  handleCancelNavigation () {
    let onCancelNavigation = this.component.props.onCancelNavigation ||
      this.component.onCancelNavigation;

    if (onCancelNavigation) {
      onCancelNavigation(this.state.nextLocation);
    }

    this.setState({
      nextLocation: null,
      confirmed: false
    });
  }

  handlePopState (e) {
    if (!this.props.allowBackButton) {
      history.pushState(null, null, this.props.location.pathname);
    }
  }

  routerWillLeave (nextLocation) {
    let allowNavigation = this.component.props.allowNavigation ||
      this.component.allowNavigation;

    if (this.state.confirmed) {
      this.setState({
        nextLocation: null,
        confirmed: false
      });
      return;
    } else if (allowNavigation && allowNavigation(nextLocation)) {
      return;
    }

    this.setState({
      nextLocation: nextLocation
    });

    return false;
  }

  componentDidMount () {
    window.addEventListener('popstate', this.handlePopState);
    this.props.router.setRouteLeaveHook(
      this.props.router.routes.slice(-1)[0],
      this.routerWillLeave
    );
  }

  componentWillUnmout () {
    window.removeEventListener('popstate', this.handlePopState);
  }

  render () {
    const confirmation = React.cloneElement(this.props.children, {
      confirmNavigation: this.handleConfirmNavigation,
      cancelNavigation: this.handleCancelNavigation,
      ref: (c) => { this.component = c; }
    });
    const hideConfirmation = <span style={{ display: 'none' }}>{confirmation}</span>;
    return this.state.nextLocation ? confirmation : hideConfirmation;
  }
};

ConfirmNavigation.propTypes = {
  allowBackButton: PropTypes.bool,
  children: PropTypes.element.isRequired,
  router: PropTypes.object,
  location: PropTypes.object
};

export default withRouter(ConfirmNavigation);
