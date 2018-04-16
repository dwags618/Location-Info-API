import React from 'react';
import { withStyles } from 'material-ui/styles';
import WordInput from './WordInput';
import CalculateButton from './CalculateButton';

const styles = theme => ({
  buttonLink: {
    textDecoration: 'none',
    color: 'white',
    fontFamily: 'Arial'
  },
  centeredColumnDiv: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  centeredColumnDiv2: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 20
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: 450,
    margin: '0 auto',
  }
});

let WordForm = (props) => {
  const { classes, translate, onChange, onSubmit, input, output } = props;

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className={classes.form}
        autoComplete="off"
      >
        <div style={{paddingTop:60}}>
          <WordInput
            name="input"
            type="text"
            placeholder={translate('login-page.username-text')}
            onChange={onChange}
            value={input}
            autoFocus/>
            <CalculateButton
            onClick={onSubmit}
            buttonText={translate('buttons.signin')}
          />
          <WordInput
            name="output"
            type="text"
            
            onChange={onChange}
            value={output}
            />
            <div style={{paddingLeft:10}}>
        </div>
        </div>
      </form>
    </div>
  );
};

export default withStyles(styles)(WordForm);
