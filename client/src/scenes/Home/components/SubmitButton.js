import React from 'react';
import classnames from 'classnames';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  buttonContainer : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '60px auto',
  },
 
  button : {
    color: '#ffffff',
    display: 'block',
    position: 'relative',
    textTransform: 'uppercase',
    width: 200,
    height: 46,
    border: 0,
    background:'#00ff00',
    fontFamily: theme.typography.button.fontFamily,
    fontSize: theme.typography.button.fontSize,
    fontWeight: theme.typography.button.fontWeight,
    '&:focus': {
      outline: 0
    }
  },
  disabled: {
    background: '#d7d7d7',
    color: '#a7a7a7'
  }
});

class SubmitButton extends React.Component {
  render() {
    const {classes, buttonText, onClick, isDisabled} = this.props;

    return (
      <div className={classes.buttonContainer}>
        <button
          type="button"
          onClick={isDisabled ? null : onClick}
          disabled={isDisabled}
          className={
            classnames(
              classes.button,
              {
                [classes.disabled]: isDisabled
              }
            )
          }>{buttonText !== undefined ? buttonText : 'Submit'}</button>
      </div>
    );
  }
}

export default withStyles(styles)(SubmitButton);
