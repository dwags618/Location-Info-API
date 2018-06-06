import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MainForm from './components/MainForm';
import Geocode from "react-geocode";
import { getElevation } from '../../services/api/locationdetails';

Geocode.setApiKey("AIzaSyD9cAvlDLIsGj1EEmifL_NEiOS98IFs_Ak");

const styles = theme => ({
  
})

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        input: '',
        output: ''
      },
      coordinates: ''
    }
  }

  changeUser = (event) => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({user});
  }

  searchLocation = () => {

    // Get latidude & longitude from address.
    Geocode.fromAddress(this.state.user.input).then(
      response => {
        this.setState({coordinates: response.results[0].geometry.location})
        console.log(this.state.coordinates);
      },
      error => {
        console.error(error);
      }
    );
    getElevation(this.state.coordinates)          
    .then(result => result.json())
    .then(data => {
      this.setState({user: 
        {output: data.results[0].elevation}
      })
      console.log(data.results[0].elevation)
    });
  }

  render() {

    const { translate, classes } = this.props;

      return (
        <div className={classes.container}>
          <MainForm
            onSubmit={this.searchLocation}
            onChange={this.changeUser}
            user={this.state.user}
            translate={translate}
          />
      </div>
      );
    }
  }


const mapStateToProps = state => {
  return {
    translate: getTranslate(state.get('locale')),
    currentLangugage: getActiveLanguage(state.get('locale')).code
  };
};

export default withRouter(connect(
  mapStateToProps
)(withStyles(styles)(HomePage)));
