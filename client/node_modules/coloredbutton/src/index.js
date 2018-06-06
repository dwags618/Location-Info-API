import React from 'react';
import palette from './palette';
import PropTypes from 'prop-types';

class ColoredButton extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      hovered: false,
    };
    this.hoverIn = this.hoverIn.bind(this);
    this.hoverOut = this.hoverOut.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }
  hoverIn () {
    this.setState({
      hovered: true,
    });
  }
  hoverOut () {
    this.setState({
      hovered: false,
    });
  }
  handleTouchTap () {
    if (!this.props.disabled) {
      this.props.onTouchTap();
    }
  }

  handleEnter (evt) {
    if (this.props.default && evt.key === 'Enter') {
      this.handleTouchTap();
    }
  }

  componentWillReceiveProps (props) {
    if (props.label && props.label !== this.state.label) {
      this.setState({label: props.label});
    }
  }

  render () {
    var styles = {
      main : {
        'display' : 'inline-block',
        'textAlign' : 'center',
        'borderRadius' : '4px',
        border : '1px solid '+(this.props.primary?
          palette.yellow:this.props.secondary?
            palette.blue:this.props.tertiary?
              palette.green:palette.greyLight),
        'background' : this.props.disabled?
          palette.greyLight
          :this.props.primary?
            this.state.hovered?
              palette.yellowDark
              :'linear-gradient(45deg, '+palette.yellow+' 0%, '+palette.yellowLight+' 100%)'
            :this.props.secondary?
              this.state.hovered?
                palette.blueDark
                :'linear-gradient(45deg, '+palette.blue+' 0%, '+palette.blueLight+' 100%)'
              :this.props.tertiary?
                this.state.hovered?
                  palette.greenDark
                  :'linear-gradient(45deg, '+palette.green+' 0%, '+palette.greenLight+' 100%)'
                :palette.whiteReal,
        'color' : this.props.primary || this.props.secondary || this.props.tertiary?
          palette.whiteReal
          :palette.black,
        'cursor' : this.props.disabled?'not-allowed':'pointer',
        'padding' : this.props.large?
          '13px 4.5vw'
          :this.props.small?
            '2px 10px'
            :'7px 14px',
        'fontSize' : this.props.large?'20pt'
          :this.props.small?'10pt':'12pt',
        'verticalAlign':this.props.small?'top':null,
        outline : 'none',
        'transition' : this.props.primary || this.props.secondary || this.props.tertiary?
          null:'all 300ms ease-in-out'
      }
    };
    styles.main = Object.assign({},styles.main,this.props.style);
    if (this.state.hovered&&this.props.hoverColor&&!this.props.disabled) {
      styles.main.background = this.props.hoverColor;
      //set text color based on brightness of background 
      if (this.props.hoverColor.indexOf('#') === 0) {
        var colorVal = parseInt(this.props.hoverColor.substring(1),16);
        var r = (colorVal >> 16) & 0xff;
        var g = (colorVal >> 8) & 0xff;
        var b = (colorVal >> 0) & 0xff;
        if (0.299*r + 0.587*g + 0.114*b < 140) {
          styles.main.color = palette.whiteReal;
        }else{
          styles.main.color = palette.black;
        }
      }
    }
    return (<div onMouseEnter={this.hoverIn}
      tabIndex={this.props.default?1:null}
      onFocus={this.hoverIn}
      onBlur={this.hoverOut}
      onMouseUp={this.hoverOut}
      onMouseLeave={this.hoverOut}
      onKeyPress={this.handleEnter}
      onClick={this.handleTouchTap}
      style={styles.main}>
      {this.props.label}
    </div>);
  }
};

ColoredButton.propTypes = {
  disabled : PropTypes.bool,
  onTouchTap : PropTypes.func,
  default : PropTypes.func,
  label : PropTypes.node,
  primary : PropTypes.bool,
  secondary : PropTypes.bool,
  tertiary : PropTypes.bool,
  large: PropTypes.bool,
  small : PropTypes.bool,
  hoverColor : PropTypes.string,
  style : PropTypes.object
}
export default ColoredButton;
