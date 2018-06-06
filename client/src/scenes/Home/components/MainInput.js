import React from 'react';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input';

const styles = (theme) => ({
  container: {
    padding:'10px 0',
    width:'100%'
  },
  helperText: {
    color: '#000000',
    marginLeft:10,
    fontWeight: 'bold'
  },
  title: {
    color:'#000000',
    marginBottom:10,
    textAlign:'center',
    width:'100%'
  },
  textFieldInput: {
    background: '#FFFFFF',
    boxSizing:'border-box',
    color:'#000000',
    height:'46px',
  },
  textFieldRoot: {
    boxSizing:'border-box',
    background:'#FFFFFF',
    padding:'6px 10px',
    width:'100%',
    borderWidth:2,
    borderStyle:'solid',
    borderColor: '#000000'
  }
});

const MainInput = (props) => {
  const { classes, name, input, label, error, ...custom } = props;
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <Typography variant="button" align="center" color="inherit">
          {label}
        </Typography>
      </div>
      <div>
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
    </div>
  );
};

export default withStyles(styles)(MainInput);
