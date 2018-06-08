import React, { Component } from 'react';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import InputForm from './components/InputForm';
import Geocode from "react-geocode";
import { getElevation, getTimeZone, getWeather } from '../../services/api/locationdetails';
import { withStyles } from 'material-ui/styles';

Geocode.setApiKey("AIzaSyD9cAvlDLIsGj1EEmifL_NEiOS98IFs_Ak");

const styles = theme => ({
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: 400,
    margin: '0 auto'
  }
});

class HomePage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      user: {
        input: '',
      },
      coordinates: '',
      elevation: '',
      timezone: '',
      temperature: '',
      name: ''
    };
  }

  changeUser = (event) => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({user});
  }

  searchLocation = () => {
    if(this.state.user.input !== '') {
      Geocode.fromAddress(this.state.user.input).then(
        response => {
          this.setState({coordinates: response.results[0].geometry.location})
        },
      );

      setTimeout(function() {
        getElevation(this.state.coordinates)          
        .then(result => result.json())
        .then(data => {
          this.setState({elevation: data.results[0].elevation.toFixed(2)})
        });

        getTimeZone(this.state.coordinates)          
        .then(result => result.json())
        .then(data => {
          this.setState({timezone: data.timeZoneName})
        });

        getWeather(this.state.coordinates)          
        .then(result => result.json())
        .then(data => {
          this.setState({
            temperature: (((data.main.temp*9)/5)-459.67).toFixed(2),
            name: data.name
          })
        });
      }.bind(this), 500);
    }
  }

  render() {
    const { translate, classes } = this.props;

    if(this.state.elevation !== '' && this.state.timezone !== '' && this.state.temperature !== '' && this.state.name !== '') {
      return (
        <div>
          <InputForm
            onSubmit={this.searchLocation}
            onChange={this.changeUser}
            user={this.state.user}
            translate={translate}
          />
          <div className={classes.form}>
            At the location {this.state.name}, the temperature is {this.state.temperature}&#8457;, 
            the timezone is {this.state.timezone}, 
            and the elevation is {this.state.elevation} meters.
          </div>
        </div>
      );
    }
    else {
      return (
        <InputForm
          onSubmit={this.searchLocation}
          onChange={this.changeUser}
          user={this.state.user}
          translate={translate}
        />
      );
    }
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