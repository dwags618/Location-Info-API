import React, { Component } from 'react';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MainForm from './components/MainForm';
import OutputForm from './components/OutputForm';
import Geocode from "react-geocode";
import { getElevation, getTimeZone, getWeather } from '../../services/api/locationdetails';

Geocode.setApiKey("AIzaSyD9cAvlDLIsGj1EEmifL_NEiOS98IFs_Ak");

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        input: '',
        output: '',
        elevation: '',
        timezone: '',
        temperature: '',
        name: ''
      },
      coordinates: ''
    };
  }

  changeUser = (event) => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({user});
  }

  searchLocation = () => {
    Geocode.fromAddress(this.state.user.input).then(
      response => {
        this.setState({coordinates: response.results[0].geometry.location})
      },
    );

    setTimeout(function() {
      getElevation(this.state.coordinates)          
      .then(result => result.json())
      .then(data => {
        this.setState({user: 
          {elevation: data.results[0].elevation}
        })
      });

      getTimeZone(this.state.coordinates)          
      .then(result => result.json())
      .then(data => {
        this.setState({user: 
          {timezone: data.timeZoneName}
        })
      });

      getWeather(this.state.coordinates)          
      .then(result => result.json())
      .then(data => {
        this.setState({user: {
          temperature: (((data.main.temp*9)/5)-459.67),
          name: data.name
          }
        })
      });
    }.bind(this), 500);
  }

  render() {
    const { translate } = this.props;
      return (
        <div>
          <MainForm
            onSubmit={this.searchLocation}
            onChange={this.changeUser}
            user={this.state.user}
            translate={translate}
          />
          <OutputForm
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
)(HomePage));