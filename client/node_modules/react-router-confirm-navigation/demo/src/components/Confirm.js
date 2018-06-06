import React, { PropTypes } from 'react';

class Confirm extends React.Component {
  render () {
    return (
      <div>
        <h4>Ugly Notification</h4>
        <p>Are you sure you wish to leave?</p>
        <button onClick={this.props.confirmNavigation}>Yep</button>
        <button onClick={this.props.cancelNavigation}>Nope</button>
      </div>
    );
  }
}

Confirm.propTypes = {
  confirmNavigation: PropTypes.func,
  cancelNavigation: PropTypes.func
};

export default Confirm;
