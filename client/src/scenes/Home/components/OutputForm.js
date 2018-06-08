import React from 'react';
import { withStyles } from 'material-ui/styles';
import MainInput from './MainInput';

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
    width: 200,
    margin: '0 auto',
  }
});

let OutputForm = (props) => {
  const { onChange, user } = props;
  return (
    <div>
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
};

export default withStyles(styles)(OutputForm);
