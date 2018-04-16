import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setTitle } from '../../redux/navigation';
import WordForm from './components/WordForm';

const styles = theme => ({
  container: {
    background:'linear-gradient(0deg, #1f5592 0%,#286ba1 37%,#3a94c0 68%,#51c4e1 100%)',
    height: '100vh'
  }
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
    
      var phraseCount = 0;
      var phrase = [];
      var sentenceArray =0;

      var sentence = [];
      sentence = this.state.user.input.split(". ");
      var sentenceCount = sentence.length;
      var freqMap = {};
      var sentenceWordCount;

      for(var count = 0; count < sentenceCount; count++)
      {
        sentenceWordCount = sentence[count].split(" ").length
        console.log(sentenceWordCount)
        for(var firstWord=0; firstWord < sentenceWordCount + 1; firstWord++)
        {
          var secondWord = firstWord +3;

          while( secondWord < sentenceWordCount +1)
          {
            sentenceArray=sentence[count]
            var words = sentenceArray.split(/\s+/).slice(firstWord,secondWord).join(" ");
            words = words.replace(/\./g,'')
            words = words.replace(/,/g,'')
            words = words.toLowerCase()
            phrase[phraseCount] = words;
            secondWord++;
            phraseCount++;
          }
        }
      }

      phrase.forEach(function(w) {
          if (!freqMap[w]) {
              freqMap[w] = 0;
          }
          freqMap[w] += 1;
      });

      Object.keys(freqMap).sort().forEach(function(word) {
        if(freqMap[word] > 1)
        {
          console.log("count of " + word + " is " + freqMap[word]);
        }
      });
    
      console.log(phrase)
      

      this.setState({
        user: {
          input: '',
          output: 'asd'
        }
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
