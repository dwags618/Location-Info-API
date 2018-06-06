import React from 'react';
import palette from './palette';

class MenuItem extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      hovered : false
    };
    this.handleClick = this.handleClick.bind(this);
    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
  }
  handleClick () {
    if (typeof this.props.onTouchTap === 'function') {
      this.props.onTouchTap();
    }
  }
  hoverOn () {
    this.setState({hovered : true});
  }
  hoverOff () {
    this.setState({hovered : false});
  }
  render () {
    let styles = {
      main : {
        cursor : 'pointer',
        backgroundColor : this.state.hovered || this.props.active?
          '#eaeaea':null,
        padding : '5px 20px',
        color : palette.black,
        textAlign : 'left',
        transition : 'all 300ms ease-in-out',
        fontSize : '15px'
      }
    };
    return (<div style={styles.main}
      onClick={this.handleClick}
      onMouseEnter={this.hoverOn}
      onMouseLeave={this.hoverOff}>
      {this.props.label}
    </div>);
  }
}

export default MenuItem;
