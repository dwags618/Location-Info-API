import React from 'react';
import { withStyles } from 'material-ui/styles';
import MainInput from './MainInput';
import SearchButton from './SearchButton';

const styles = theme => ({
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: 200,
    margin: '0 auto',
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
        <div style={{paddingTop:60}}>
          <MainInput
            name="input"
            type="text"
            placeholder={translate('home-page.text')}
            onChange={onChange}
            value={user.input}
            autoFocus/>
            <SearchButton
            onClick={onSubmit}
            buttonText={translate('buttons.search')}
          />
        </div>
      </form>
    </div>
  );
};

export default withStyles(styles)(MainForm);
