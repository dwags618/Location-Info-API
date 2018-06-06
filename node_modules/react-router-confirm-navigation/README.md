## React Router Confirm Navigation
Displays a custom component to confirm or cancel a react-router navigation. Uses react-router's routerWillLeave hook under the hood.

**Note: This project is in active development. Breaking API changes may happen without warning until v1.0.**

### Installation
`npm i react-router-confirm-navigation -S`

or

`yarn add react-router-confirm-navigation`

### Usage
###### RouteComponent.js
Can be placed anywhere inside a component that is used for a `<Route />`. Uses react router's higher order component `withRouter` to pass router props.
```js
import React from 'react';
import ConfirmNavigation from 'react-router-confirm-navigation';
import YourCustomConfirmation from './YourCustomConfirmation';

export default () => {
  return (
    <div>
      <ConfirmNavigation allowBackButton>
        <YourCustomConfirmation
          onConfirmNavigation={(currentLocation) => {
            console.log('navigation allowed to ', currentLocation.pathname);
          }}
          onCancelNavigation={(nextLocation) => {
            console.log('navigation cancelled to ', nextLocation.pathname);
          }}
          allowNavigation={(nextLocation) => {
            // condition for allowing or blocking a navigation
            return false;
          }}
        />
      </ConfirmNavigation>
    </div>
  );
};
```
###### YourCustomConfirmation.js
Call `this.props.confirmNavigation` and `this.props.cancelNavigation` anywhere you like from inside the component.
```js
class YourCustomConfirmation extends React.Component {
  // optionally, you can use class methods or pass in as props as shown above
  // allowNavigation (nextLocation) { return false; }
  // onConfirmNavigation (currentLocation) {}
  // onCancelNavigation (nextLocation) {}
  render () {
    return (
      <div>
        <h4>Warning</h4>
        <p>Are you sure you wish to leave?</p>
        <button onClick={this.props.confirmNavigation}>Yep</button>
        <button onClick={this.props.cancelNavigation}>Nope</button>
      </div>
    );
  }
}
```
#### TODO
1. Test usage with react router v4.x.x
2. Add more tests for improper component usage
