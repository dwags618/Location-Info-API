import React from 'react';
import palette from './palette';

class Popover extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      menu : null,
      shift : 0
    };
    this.setRef = this.setRef.bind(this);
    this.isInView = this.isInView.bind(this);
    this.reposition = this.reposition.bind(this);
    this.wasUnfocused = this.wasUnfocused.bind(this);
    this.setCenterShift = this.setCenterShift.bind(this);
  }
  setRef (ref) {
    this.state.menu = ref;
    this.setState(this.state);
  }
  componentDidMount () {
    window.addEventListener('scroll',this.reposition);
  }
  componentWillUnmount () {
    window.removeEventListener('scroll',this.reposition);
  }
  componentDidUpdate () {
    if (this.props.open) {
      if (this.props.anchorEl) {
        this.props.anchorEl.tabIndex = -1;
      }
      if (this.props.autoCloseOnBlur) {
        this.state.menu.focus();
      }
      if (!this.isInView()) {
        this.props.onRequestClose();
      }
    }
  }
  isInView () {
    if (this.state.menu) {
      var rect = this.state.menu.getBoundingClientRect();
      var html = document.documentElement;
      return (
        rect.top<= (window.innerHeight || html.clientHeight) &&
        rect.bottom > 0
      );
    }
    return false;
  }
  reposition () {
    if (this.props.anchorEl && this.props.open) {
      this.forceUpdate();
    }
  }
  wasUnfocused (evt) {
    if (this.props.autoCloseOnBlur && 
      (evt.relatedTarget !== this.props.anchorEl)) {
      window.setTimeout(this.props.onRequestClose,100);
    }
  }
  setCenterShift () {
    let shift = 0;
    if (this.props.centered && this.state.menu) {
      shift = this.state.menu.getBoundingClientRect().width/2;
    }
    this.setState({shift : shift});
  }
  render () {
    let leftPos = 0;
    let rightPos = 0;
    if (this.props.centered && this.props.anchorEl) {
      setTimeout(this.setCenterShift,20);
    }
    if (this.props.attachRight && this.props.anchorEl) {
      rightPos = Math.round(this.props.anchorEl.getBoundingClientRect().right -
        this.props.anchorEl.getBoundingClientRect().left);
    }
    if (!this.props.attachRight && this.props.anchorEl) {
      if (this.props.centered) {
        leftPos = Math.round(this.props.anchorEl.getBoundingClientRect().left - this.state.shift);
      }else{
        leftPos = Math.round(this.props.anchorEl.getBoundingClientRect().left)
      }
    }
    var styles = {
      main : {
        'position' : 'fixed',
        'top' : this.props.anchorEl&&this.props.open?
          Math.round(this.props.anchorEl.getBoundingClientRect().bottom+(this.props.verticalOffset||0))+'px':0,
        'left' :  this.props.attachRight?
          null:this.props.anchorEl&&this.props.open?
            leftPos+'px':0,
        'right' : this.props.attachRight?
          this.props.anchorEl&&this.props.open?
            rightPos+'px':0:null,
        'display' : this.props.open?'block':'none',
        'backgroundColor' : palette.whiteReal,
        'zIndex' : '2',
        border : this.props.withTriangle?'1px solid rgba(0,0,0,0.2)':null,
        'boxShadow' : 'rgba(0, 0, 0, 0.45) 0px 1px 7px',
        'outline' : 'none'
      },
    };
    return (<div tabIndex='-1'
      ref={this.setRef}
      onBlur={this.wasUnfocused}
      style={styles.main}>
      {this.props.children}
    </div>);
  }
};

export default Popover;
