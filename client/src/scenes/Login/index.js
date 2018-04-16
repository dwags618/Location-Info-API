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

wordFreq = () => {
  
    var phraseCount = 0;
    var phrase = [];
    var hello =0;

    var sentence = [];
    sentence = this.state.user.username.split(". ");
    console.log(sentence[0])
    var sentenceCount = sentence.length;
    console.log(sentenceCount)

    var sentenceWordCount

    for(var count = 0; count < sentenceCount; count++)
    {
      sentenceWordCount = sentence[count].split(" ").length
      console.log(sentenceWordCount)
      for(var firstWord=0; firstWord < sentenceWordCount + 1; firstWord++)
      {
        var secondWord = firstWord +3;
        while( secondWord < sentenceWordCount +1)
        {
          
          hello=sentence[count]
          console.log("hello")
          var words = hello.split(/\s+/).slice(firstWord,secondWord).join(" ");
          words = words.replace(/\./g,'')
          words = words.toLowerCase()
          phrase[phraseCount] = words;
          secondWord++;
          phraseCount++;
        }
      }
    }
  
    console.log(phrase)
    

    this.setState({
      user: {
        name: '',
        username: '',
        password: 'asd'
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
            onSubmit={this.wordFreq}
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
