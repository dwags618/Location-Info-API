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
      var freqMap = [];
      var frequentPhrases = [];
      var frequentPhraseMap=[];
      var sentenceWordCount;
      var commonPhrases=[];

      //group every 3 word phrase and store into phrase array
      for(var count = 0; count < sentenceCount; count++)
      {
        sentenceWordCount = sentence[count].split(" ").length
        for(var firstWord=0; firstWord < sentenceWordCount + 1; firstWord++)
        {
          var secondWord = firstWord + 3;

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

      //count every phrase occurence
      phrase.forEach(function(w) {
          if (!freqMap[w]) {
              freqMap[w] = 0;
          }
          freqMap[w] += 1;
      });

      //if count of a phrase is greater than 1 store in frequentPhrases array
      Object.keys(freqMap).sort().forEach(function(word) {
        if(freqMap[word] > 1)
        {
          frequentPhraseMap.push(freqMap[word])
          frequentPhrases.push(word)
        }
      });

        //omit phrase if it is a subset of another, store most frequent phrases into commonPhrases array
        var duplicate =0;
        var frequentPhraseCount = frequentPhrases.length
        for(var count1 = 0; count1 < frequentPhraseCount; count1++)
        {
          for(var count2 = 0; count2 < frequentPhraseCount; count2++)
          {
            var duplicateCheck = frequentPhrases[count2]
            if(duplicateCheck.includes(frequentPhrases[count1]))
            {
              duplicate++;
            }
          }
          if(duplicate === 1)
          {
            commonPhrases.push(frequentPhrases[count1])
          }

          duplicate = 0;
        }
    
      this.setState({
        user: {
          input: '',
          output: commonPhrases
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
