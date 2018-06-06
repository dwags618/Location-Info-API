import React from 'react';
import PropTypes from 'prop-types';
import palette from './palette';

class TextInput extends React.Component{
  constructor(props) {
    super(props);
    this.state = {focused:false};
    if (props.palette) {
      this.palette = this.props.palette;
    }else{
      this.palette = palette;
    }
    this.setFocus = this.setFocus.bind(this);
    this.unsetFocus = this.unsetFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  setFocus(){
    if(this.props.onFocus)
      this.props.onFocus();
    this.setState({focused:true});
  }
  unsetFocus(evt){
    if (this.props.onBlur) {
        this.props.onBlur(evt);
    }
    this.setState({focused:false});
  }
  handleChange (evt) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(evt.target.value);
    }
  }
  handleKeyDown (evt) {
    if (this.props.onKeyDown)
      this.props.onKeyDown(evt);
    if (evt.key === 'Enter'&&this.props.onEnter)
      this.props.onEnter();
  }
  render () {
    var isMobile = !window.matchMedia('(min-width : 500px)').matches;
    var styles = {
      main : {
        'margin' : '10px 0px',
        'position' : 'relative'
      },
      pseudo : {
        'position' : 'relative',
        'borderTop' : this.state.focused?
          '1px solid ' + (this.props.focusBorder ? this.props.focusBorder : this.palette.grey)
          :'1px solid ' + (this.props.errorText?
            this.palette.errorOrange:this.palette.greyLight),
        'borderRight' : this.state.focused?
          '1px solid ' + (this.props.focusBorder ? this.props.focusBorder : this.palette.grey)
          :'1px solid ' + (this.props.errorText?
            this.palette.errorOrange:this.palette.greyLight),
        'borderBottom' : this.state.focused?
          '1px solid ' + (this.props.focusBorder ? this.props.focusBorder : this.palette.grey)
          :'1px solid ' + (this.props.errorText?
            this.palette.errorOrange:this.palette.greyLight),
        'borderLeft' : this.state.focused?
          '1px solid ' + (this.props.focusBorder ? this.props.focusBorder : this.palette.grey)
          :'1px solid ' + (this.props.errorText?
            this.palette.errorOrange:this.palette.greyLight),
        'backgroundColor' : this.props.disabled?
          '#c3c3c3':this.palette.white,
        'color':this.props.disable?'#868686':null,
        'borderRadius' : this.props.borderRadius ? this.props.borderRadius : '2px',
        'maxWidth' : this.props.fullWidth?
          null:isMobile?'89%': '380px',
        'margin' : 'auto',
        'textAlign' : 'left',
        'overflow' : 'hidden'
      },
      inputContainer : {
        'width' : (this.props.isProfile||this.props.type==='multiline') ? '100%':'89%',
        'overflow' : this.props.type !== 'multiline'? 'hidden' : 'visible',
        marginLeft : this.props.leftIcon?'6%':null
      },
      textField : {
        'border' : 'none',
        'outline' : 'none',
        'backgroundColor' : this.props.disabled? '#c3c3c3':this.palette.white,
        'lineHeight' : this.props.type==='multiline'?
          null:this.props.height||'45px',
        'height': this.props.type === 'multiline'?
          '200px':this.props.height||'45px',
        'width' : '100%',
        'padding' : '0px 15px',
        'fontSize' : this.props.textSize?this.props.textSize:'13pt',
        'fontFamily': "'Lato', sans-serif"
      },
      iconContainerRight : {
        'color' : this.state.focused?
          this.palette.secondaryLight:this.palette.greyLight,
        'position' : 'absolute',
        'right' : '10px',
        'top' : '0px',
        'lineHeight' : this.props.height||'45px',
        'textAlign' : 'center',
        'width' : '20px',
        'fontSize' : '18pt',
        'transition' : 'all 300ms ease-in-out'
      },
      iconContainerLeft : {
        'color' : this.state.focused?
          this.palette.blueLight:this.palette.greyLight,
        'position' : 'absolute',
        'left' : '10px',
        'top' : '0px',
        'lineHeight' : this.props.height||'45px',
        'textAlign' : 'center',
        'width' : '20px',
        'fontSize' : '18pt',
        'transition' : 'all 300ms ease-in-out'
      },
      error : {
        'color' : this.palette.white,
        'backgroundColor' : this.palette.errorOrange,
        'textAlign' : 'center',
        'fontSize' : '11pt',
        'position' : 'absolute',
        'maxWidth' : this.props.fullWidth?
          null:isMobile?'89%': '380px',
        'margin' : 'auto',
        'border' : !this.props.fullWidth&&this.props.errorText?
          '1px solid '+this.palette.errorOrange:null,
        'left' : '0px',
        'right' : '0px',
        'bottom' : this.props.errorText?'-8px':'0px',
        'height' : this.props.errorText?'19px':'0px',
        'borderRadius' : '0px 0px 2px 2px',
        'transition' : 'all 300ms ease-in-out',
        'overflow' : 'hidden'
      },
      success : {
        'color' : this.palette.white,
        'backgroundColor' : this.palette.successGreen,
        'textAlign' : 'center',
        'fontSize' : '11pt',
        'position' : 'absolute',
        'maxWidth' : this.props.fullWidth?
          null:isMobile?'89%': '380px',
        'border' : !this.props.fullWidth&&this.props.successText?
          '1px solid '+this.palette.successGreen:null,
        'margin' : 'auto',
        'left' : '0px',
        'right' : '0px',
        'bottom' : this.props.successText?'-8px':'0px',
        'height' : this.props.successText?'19px':'0px',
        'borderRadius' : '0px 0px 2px 2px',
        'transition' : 'all 300ms ease-in-out',
        'overflow' : 'hidden'
      },
      label: {
        fontWeight: '600',
        marginBottom: '5px'
      }
    };
    styles.main = Object.assign({},styles.main,this.props.style);
    styles.textField = Object.assign({},styles.textField,this.props.inputStyle);
    styles.pseudo = Object.assign({},styles.pseudo,this.props.pseudoStyle)
    styles.iconContainerLeft = Object.assign({},styles.iconContainerLeft,this.props.iconStyle);
    styles.iconContainerRight = Object.assign({},styles.iconContainerRight,this.props.iconStyle);
    return (<div style={styles.main}>
      <div style={styles.label}>{this.props.topLabel}</div>
      <div style={styles.pseudo}>
        <div style={styles.inputContainer}>
            {this.props.type === 'multiline'?
              <textarea placeholder={this.props.label}
                readOnly={!!this.props.disabled}
                value={this.props.value}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
                onFocus={this.setFocus}
                onBlur={this.unsetFocus}
                style={styles.textField}
                id={this.props.id}
                autoFocus={this.props.autofocus}
                name={this.props.name}/>
              :<input type={this.props.type || 'text'}
                placeholder={this.props.label}
                readOnly={!!this.props.disabled}
                value={this.props.value}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
                onFocus={this.setFocus}
                onBlur={this.unsetFocus}
                style={styles.textField}
                id={this.props.id}
                autoFocus={this.props.autofocus}
                name={this.props.name}
                maxLength={this.props.maxLength}/>}
        </div>
        {this.props.rightIcon?
          <div style={styles.iconContainerRight}>
            {this.props.rightIcon}
          </div>
        :this.props.leftIcon?
          <div style={styles.iconContainerLeft}>
            {this.props.leftIcon}
          </div>
        :null}
      </div>
      <div style={styles.error}>{this.props.errorText}</div>
      <div style={styles.success}>{this.props.successText}</div>
    </div>);
  }
};

TextInput.propTypes = {
  fullWidth : PropTypes.bool,
  onChange : PropTypes.func,
  onFocus : PropTypes.func,
  onBlur : PropTypes.func,
  onEnter : PropTypes.func,
  label : PropTypes.string,
  topLabel : PropTypes.string,
  value : PropTypes.string,
  errorText : PropTypes.string,
  rightIcon : PropTypes.node,
  leftIcon : PropTypes.node,
  type : PropTypes.string,
  autofocus : PropTypes.bool,
  disabled : PropTypes.bool,
  style : PropTypes.object,
  inputStyle : PropTypes.object,
  pseudoStyle : PropTypes.object,
  textSize : PropTypes.string,
  height : PropTypes.string,
  palette : PropTypes.object
};
export default TextInput;
