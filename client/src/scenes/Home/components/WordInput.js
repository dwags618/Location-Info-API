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
    color:'#ffffff',
    marginBottom:10,
    textAlign:'center',
    width:'100%'
  },
  input: {
    background:'#66b3d4'
  },
  textFieldInput: {
    background: '#66b3d4',
    boxSizing:'border-box',
    color:'#eef4f4',
    height:'200px',
    
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

const WordInput = (props) => {
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
    </div>
  );
};

export default withStyles(styles)(WordInput);
