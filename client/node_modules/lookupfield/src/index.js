import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'textfield';
import palette from './palette';
import Popover from 'react_popover';
import MenuItem from 'react_menuitem';

class LookupField extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      displayText : this.props.value+'',
      selectedIndex : -1,
      anchorEl : null,
      isFocused : false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSpecialKey = this.handleSpecialKey.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.setRef = this.setRef.bind(this);
  }
  componentWillReceiveProps (newProps) {
    if (this.props.value !== newProps.value)
      this.setState({displayText : newProps.value});
  }
  handleChange (value,selectedValue) {
    if (value === -1) {
      this.setState({selectedIndex : -1});
      this.props.onSelect(selectedValue,this.state.selectedIndex);
    }else{
      this.props.onSearch(value);
      this.setState({displayText : value});
    }
  }
  handleSpecialKey (evt) {
    if (evt.key === 'ArrowDown'
        && this.state.selectedIndex < this.props.dataSource.length) {
      this.setState({
        selectedIndex : this.state.selectedIndex+1,
        displayText : this.props.dataSource[this.state.selectedIndex+1]
      });
    }else if (evt.key === 'ArrowUp'
        && this.state.selectedIndex >= 0) {
      this.setState({
        selectedIndex : this.state.selectedIndex-1,
        displayText : this.props.dataSource[this.state.selectedIndex-1]
      });
    }else if (evt.key === 'Escape' || evt.key === 'Enter') {
      if (this.props.isVerySmart
      && this.props.dataSource.length > 0
      && this.state.selectedIndex === -1) {
        this.props.onSelect(this.props.dataSource[0],0);
        if (typeof this.props.onEnter === 'function') {
          this.props.onEnter(this.props.dataSource[0],0);
        }
      }else{
        this.props.onSelect(this.state.displayText,this.state.selectedIndex);
        if (typeof this.props.onEnter === 'function') {
          this.props.onEnter(this.state.displayText,this.state.selectedIndex);
        }
      }
      this.setState({selectedIndex : -1});
    }
  }
  handleMenuClick (index) {
    this.setState({
      displayText : this.props.dataSource[index],
      selectedIndex : index
    });
  }
  handleFocus () {
    this.setState({isFocused : true});
  }
  handleBlur () {
    var self = this;
    //Timeout gives menuitemClick the chance to set displayText
    window.setTimeout(function () {
      if (self.props.isVerySmart
        && self.props.dataSource.length > 0
        && self.state.selectedIndex === -1) {
        self.props.onSelect(self.props.dataSource[0],0);
      }else{
        self.props.onSelect(self.state.displayText,self.state.selectedIndex);
      }
      self.setState({
        selectedIndex : -1,
        isFocused : false
      });
    },500);
  }
  setRef (ref) {
    this.setState({anchorEl : ref});
  }
  render () {
    var self = this;
    var styles = {
      menuContainer : {
        'width' : '300px',
        'maxHeight' : '300px'
      },
      menuItem : {
        'borderBottom' : '1px solid ' + palette.greyLight,
        'transition' : 'all 300ms ease-in-out',
        'margin' : '0px 10px',
        'padding' : '10px',
        'cursor' : 'pointer'
      },
      selectedMenuItem : {
        'backgroundColor' : palette.greyLight,
        'transition' : 'all 300ms ease-in-out',
        'borderBottom' : '1px solid '+palette.yellow,
        'margin' : '0px 10px',
        'padding' : '10px'
      }
    };
    return (<div ref={this.setRef}
      style={this.props.style}>
      <TextField label={this.props.label}
        style={this.props.textFieldStyle}
        topLabel={this.props.topLabel}
        fullWidth={this.props.fullWidth}
        leftIcon={this.props.leftIcon}
        rightIcon={this.props.rightIcon}
        height={this.props.height}
        inputStyle={this.props.inputStyle}
        pseudoStyle={this.props.pseudoStyle}
        textSize={this.props.textSize}
        borderRadius={this.props.borderRadius}
        onChange={this.handleChange}
        onKeyDown={this.handleSpecialKey}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        value={this.state.displayText} />
        <Popover
          canAutoPosition={false}
          style={styles.menuContainer}
          open={this.state.isFocused && this.props.dataSource.length>0}
          onRequestClose={this.handleBlur}
          anchorEl={this.state.anchorEl}>
          {this.props.dataSource.map(function (item,n) {
            return (<MenuItem label={item}
              key={n}
              onTouchTap={self.handleMenuClick.bind(self,n)}
              active={n===self.state.selectedIndex}/>)
          })}
        </Popover>
    </div>);
  }
};

LookupField.propTypes = {
  label : PropTypes.string,
  topLabel : PropTypes.string,
  value : PropTypes.string,
  style : PropTypes.object,
  pseudoStyle : PropTypes.object,
  textFieldStyle : PropTypes.object,
  onSelect : PropTypes.func,
  onSearch : PropTypes.func,
  dataSource : PropTypes.array.isRequired,
  isVerySmart : PropTypes.bool
};
export default LookupField;
