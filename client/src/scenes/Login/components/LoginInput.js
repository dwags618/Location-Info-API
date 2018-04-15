import React from 'react';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input';
import { FormHelperText } from 'material-ui/Form';

const styles = (theme) => ({
  container: {
    padding:'10px 0',
    width:'100%'
  },
  helperText: {
    color: 'white',
    marginLeft:10,
    fontWeight: 'bold'
  },
  title: {
    color:'#ffffff',
    marginBottom:10,
    textAlign:'center',
    width:'100%'
  },
  input: {
    background:'#66b3d4',
    display:'flex',
  },
  textFieldInput: {
    background: '#66b3d4',
    boxSizing:'border-box',
    color:'#eef4f4',
    height:'100%',
    
  },
  textFieldRoot: {
    boxSizing:'border-box',
    background:'#66b3d4',
    padding:'6px 10px',
    width:'100%',
    borderWidth:2,
    borderStyle:'solid',
    borderColor: '#FFFFFF'
  }
});

const LoginInput = (props) => {
  const { classes, name, input, label, error, ...custom } = props;
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <Typography variant="button" align="center" color="inherit">
          {label}
        </Typography>
      </div>
      <div className={classes.input}>
        <Input
          name={name}
          disableUnderline
          fullWidth
          classes={{
            root: classes.textFieldRoot,
            input: classes.textFieldInput
          }}
          {...custom}
        />
      </div>
      {error && <FormHelperText className={classes.helperText}>{error}</FormHelperText>}
    </div>
  );
};

export default withStyles(styles)(LoginInput);
