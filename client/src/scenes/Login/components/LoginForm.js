import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import LoginInput from './LoginInput';
import SignInButton from './SignInButton';

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

let LoginForm = (props) => {
  const { classes, translate, onChange, onSubmit, user, errors, message } = props;

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className={classes.form}
        autoComplete="off"
      >
        <div style={{paddingTop:60}}>
          <Typography variant="body2" style={{color:'white'}}>
            {message}
          </Typography>
          <LoginInput
            name="username"
            type="text"
            placeholder={translate('login-page.username-text')}
            onChange={onChange}
            value={user.username}
            error={errors && errors.username}
            autoFocus/>
            <SignInButton
            onClick={onSubmit}
            buttonText={translate('buttons.signin')}
          />
          <LoginInput
            name="password"
            type="text"
            placeholder={"Password"}
            onChange={onChange}
            value={user.password}
            error={errors && errors.password}
            />
            <div style={{paddingLeft:10}}>

        </div>
          
        </div>
      </form>
      
        
        

    </div>
  );
};

export default withStyles(styles)(LoginForm);
