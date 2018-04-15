import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { setTitle } from '../../redux/navigation';
import LoginForm from './components/LoginForm';

const styles = theme => ({
  container: {
    background:'linear-gradient(0deg, #1f5592 0%,#286ba1 37%,#3a94c0 68%,#51c4e1 100%)',
    height: '100vh'
  }
})

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false,
      user: {
        username: '',
        password: ''
      },
      message: '',
      errors: {
        username: '',
        password: ''
      },
    }
  }

  changeUser = (event) => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({user});
  }

  login = () => {
    this.setState({
      user: {
        name: '',
        username: '',
        password: ''
      }
    });
  }

  mostFreqStr = () => {
  //ERROR HANDLING
  //more than one argument passed
  if (arguments.length > 1) {
    return "Sorry, you may only pass one array of strings to mostFreqStr."
  }
  //the argument is not an array OR if it's empty
  if (!Array.isArray(this.state.user.user.username) || this.state.user.username.length < 1) {
    return "Sorry, you may only pass an array of strings to mostFreqStr."
  }
  //an element in arr is not a string
  for (var i = 0; i < this.state.user.username.length; i++) {
    if (typeof this.state.user.username[i] !== "string") {
      return `Sorry, element at index ${i} is not a string.`
    }
  }
  
  var obj = {}, mostFreq = 0, which = [];

  this.state.user.username.forEach(ea => {
    if (!obj[ea]) {
      obj[ea] = 1;
    } else {
      obj[ea]++;
    }

    if (obj[ea] > mostFreq) {
      mostFreq = obj[ea];
      which = [ea];
    } else if (obj[ea] === mostFreq) {
      which.push(ea);
    }
  });
  
  if (which.length > 1) {
    which = `"${which.join(`" and "`)}" are the most frequent strings in the array.`
  } else {
    which = `"${which}" is the most frequent string in the array.`
  }

  this.setState({
      user: {
       
        password: this.state.which
      }
    });
}

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;
    const { translate, classes } = this.props;

   
   
      if (redirectToReferrer) {
        return (
          <Redirect to={from}/>
        );
      }

      return (
        <div className={classes.container}>
          <LoginForm
            onSubmit={this.mostFreqStr}
            onChange={this.changeUser}
            user={this.state.user}
            translate={translate}
            errors={this.state.errors}
            message={this.state.message}
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
)(withStyles(styles)(LoginPage)));
