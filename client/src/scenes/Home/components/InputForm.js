import React from 'react';
import { withStyles } from 'material-ui/styles';
import MainInput from './MainInput';
import SubmitButton from './SubmitButton';

const styles = theme => ({
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: 200,
    margin: '0 auto',
    paddingTop: 60
  }
});

let MainForm = (props) => {
  const { classes, translate, onChange, onSubmit, user } = props;
  return (
    <div>
      <form
        onSubmit={onSubmit}
        className={classes.form}
        autoComplete="off"
      >
        <MainInput
          name="input"
          type="text"
          placeholder={translate('home-page.text')}
          onChange={onChange}
          value={user.input}
          autoFocus/>
          <SubmitButton
          onClick={onSubmit}
          buttonText={translate('buttons.submit')}
        />
      </form>
    </div>
  );
};

export default withStyles(styles)(MainForm);
