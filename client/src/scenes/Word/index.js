import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setTitle } from '../../redux/navigation';
import WordForm from './components/WordForm';
import Geocode from "react-geocode";
import { getElevation } from '../../services/api/matchdetails';

Geocode.setApiKey("AIzaSyD9cAvlDLIsGj1EEmifL_NEiOS98IFs_Ak");

const styles = theme => ({
  
})

class WordPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        input: '',
        output: ''
      }
    }
  }

  changeUser = (event) => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({user});
  }

  wordFreq = () => {
    getElevation()          
    .then(result => result.json())
    .then(data => {
      console.log(data.results[0].elevation)
    });


   
  }

  render() {

    const { translate, classes } = this.props;

      return (
        <div className={classes.container}>
          <WordForm
            onSubmit={this.wordFreq}
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
)(withStyles(styles)(WordPage)));
