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
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: 450,
    margin: '0 auto',
  }
});

let WordForm = (props) => {
  const { classes, translate, onChange, onSubmit, user } = props;

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
            placeholder={translate('word-page.text')}
            onChange={onChange}
            value={user.input}
            autoFocus/>
            <CalculateButton
            onClick={onSubmit}
            buttonText={translate('buttons.calculate')}
          />
          <WordInput
            name="output"
            type="text"
            onChange={onChange}
            value={user.output}
            />
            <div style={{paddingLeft:10}}>
        </div>
        </div>
      </form>
    </div>
  );
};

export default withStyles(styles)(WordForm);
