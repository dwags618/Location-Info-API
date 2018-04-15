import React from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import { setTitle } from '../../redux/navigation';

const styles = {
  page: {
    paddingBottom: 30
  }
}

class HomePage extends React.Component {
  componentDidMount() {
    this.props.setTitle(this.props.translate('home-page.title'));
  }

  render() {
    const { classes } = this.props;

   

    return (
      <div className={classes.page}>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    trays: state.get('trays'),
    translate: getTranslate(state.get('locale')),
    currentLangugage: getActiveLanguage(state.get('locale')).code,
    deviceIsConnected: state.getIn(['connection', 'device_socket', 'isConnected']),
    serverIsConnected: state.getIn(['connection', 'server_socket', 'isConnected']),
    errorMessages: state.get('error')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTitle: (title) => {
      dispatch(setTitle(title));
    }
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(HomePage)));
