import React from 'react';
import Popover from 'react_popover';
import MenuItem from 'react_menuitem';

class FilterDropDown extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      expanded : false
    };
    this.expand = this.expand.bind(this);
    this.close = this.close.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  expand (evt) {
    this.setState({
      expanded : !this.state.expanded,
      anchor : evt?evt.target:null
    });
  }
  close (evt) {
    this.setState({
      expanded : false,
      anchor : null
    });
  }
  handleSelect (value) {
    if (typeof this.props.onSelect === 'function') {
      this.props.onSelect(value);
    }
    this.expand();
  }
  render () {
    const self = this;
    let styles = {
      main : {
        display : 'inline-block',
        padding : '10px 15px',
        cursor : 'pointer',
        float : this.props.float? this.props.float: null,
        backgroundColor : this.state.expanded?
          '#ffffff':null
      },
      trigger: {
        outline : 'none',
        fontSize : '15px'
      },
      caret : {
        display : 'inline-block',
        fontSize : '7pt',
        verticalAlign : 'middle',
        marginLeft : '3px'
      }
    };
    styles.main = Object.assign({},styles.main,this.props.style);
    return (<div style={styles.main} onMouseLeave={this.close} onMouseEnter={this.expand}>
      <div style={styles.trigger}>
        {this.props.name}
        {this.props.noCaret?
          null:<span style={styles.caret}>&#9660;</span>}
        <Popover open={this.state.expanded}
          centered={this.props.menuCenter}
          anchorEl={this.state.anchor}
          autoCloseOnBlur
          onRequestClose={this.close}>
          {typeof this.props.items !== 'undefined'?this.props.items.map(function (item,n) {
            return (<MenuItem label={item} key={n} onTouchTap={self.handleSelect.bind(self,item)}/>)
          }):null}
        </Popover>
      </div>
    </div>);
  }
}

module.exports = FilterDropDown;
