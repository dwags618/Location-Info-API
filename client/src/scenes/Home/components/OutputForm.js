import React from 'react';
import { withStyles } from 'material-ui/styles';
import MainInput from './MainInput';

const styles = theme => ({
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: 200,
    margin: '0 auto',
  }
});

let OutputForm = (props) => {
  const { onChange, user, coordinates, classes } = props;
  if(user.elevation !== '' && user.timezone !== '' && user.temperature !== '' && user.name !== '')
  {
    return (
      <div className={classes.form}>
        <MainInput
          name="elevation-output"
          type="text"
          onChange={onChange}
          value={user.elevation}
        />
        <MainInput
          name="timezone-output"
          type="text"
          onChange={onChange}
          value={user.timezone}
        />
        <MainInput
          name="temperature-output"
          type="text"
          onChange={onChange}
          value={user.temperature}
        />
        <MainInput
          name="name-output"
          type="text"
          onChange={onChange}
          value={user.name}
        />
      </div>
    );
  }
  else
  {
    return null
  }
};

export default withStyles(styles)(OutputForm);
