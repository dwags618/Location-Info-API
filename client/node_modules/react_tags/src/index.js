import React from 'react';
import FontAwesome from 'react-fontawesome';

class Tag extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      shown : true 
    };
    this.handleRemove = this.handleRemove.bind(this);
  }
  componentDidMount () {
    const self = this;
    window.setTimeout(function () {
      self.setState({shown : true});
    },100);
  }
  componentDidUpdate () {
    const self = this;
    if (this.state.shown === false &&
      typeof this.props.onRemove === 'function') {
      window.setTimeout(function () {
        self.props.onRemove();
      },300);
    }
  }
  handleRemove () {
    if (typeof this.props.onRemove === 'function') {
      const self = this;
      this.setState({shown : false});
    }
  }
  render () {
    let isMobile = !window.matchMedia('(min-width : 500px)').matches;
    let styles = {
      main : {
        display : 'inline-block',
        margin : isMobile?
          '5px':this.props.first?
            '5px 5px 5px 0px':'5px',
        borderRadius : '3px',
        backgroundColor : '#eaeaea',
        position : 'relative',
        transition : 'all 100ms ease-in-out',
        maxWidth : this.state.shown?'500px':'0px',
        padding : this.state.shown?'4px 25px 7px 10px':'0px',
        fontSize : '15px',
        overflow : 'hidden',
        height : '18px'
      },
      delBtn : {
        position : 'absolute',
        fontSize : '7.5pt',
        cursor : 'pointer',
        right : '10px',
        top : '9px',
        color : '#aeaeae'
      }
    };
    return (<div style={styles.main}>
      {this.props.label}
      {this.props.onRemove?
        <span style={styles.delBtn} onClick={this.handleRemove}>X</span>
      :null}
    </div>)
  }
}

class TagList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      container : null
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.setRef = this.setRef.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
  }
  handleRemove (item) {
    if (typeof this.props.onRemove === 'function') {
      this.props.onRemove(item);
    }
  }
  setRef (el) {
    const self = this;
    this.setState({container : el});
    setTimeout(function () {
      self.forceUpdate();
    },200);
  }
  scrollLeft () {
    if (this.state.container.scrollLeft > 30) {
      this.state.container.scrollLeft = this.state.container.scrollLeft - 30;
    }else{
      this.state.container.scrollLeft = 0;
    }
  }
  scrollRight () {
    if (this.state.container.scrollLeft < (this.state.container.scrollWidth - this.state.container.clientWidth)) {
      this.state.container.scrollLeft = this.state.container.scrollLeft + 30;
    }else{
      this.state.container.scrollLeft = this.state.container.scrollWidth - this.state.container.clientWidth;
    }
  }
  render () {
    const self = this;
    let isMobile = !window.matchMedia('(min-width : 500px)').matches;
    let isOverflowing = this.state.container&&(this.state.container.scrollWidth > this.state.container.clientWidth);
    let styles = {
      main : {
        position : 'relative'
      },
      container : {
        margin : '5px 0px',
        padding : isOverflowing?'0px 20px':'0px',
        minHeight : '15px',
        whiteSpace : isMobile?null:'nowrap',
        overflow : 'hidden'
      },
      btnLeft : {
        position : 'absolute',
        background : 'linear-gradient(90deg,'+
          (this.props.bgColor?
            this.props.bgColor:'rgba(250,250,249,1)')+
          ' 0%,rgba(0,0,0,0) 100%)',
        padding : '7px 7px 0px 0px',
        height : '38px',
        fontSize : '16pt',
        top : '0px',
        left : '0px',
        cursor : 'pointer'
      },
      btnRight : {
        position : 'absolute',
        background : 'linear-gradient(90deg,rgba(0,0,0,0) 0%, '+
          (this.props.bgColor?
            this.props.bgColor:'rgba(250,250,249,1)')+
          ' 100%)',
        padding : '7px 0px 0px 7px',
        height : '38px',
        fontSize : '16pt',
        top : '0px',
        right : '0px',
        cursor : 'pointer'
      }
    };
    return (<div style={styles.main}>
      <div style={styles.container} ref={this.setRef}>
        {this.props.items.map(function(item,n){
          return (<Tag first={n === 0} key={item} label={item} onRemove={self.handleRemove.bind(self,item)}/>);
        })}
      </div>
      {isOverflowing?
        [<div key='L' style={styles.btnLeft} onClick={this.scrollLeft}><FontAwesome name='chevron-left'/></div>,
        <div key='R' style={styles.btnRight} onClick={this.scrollRight}><FontAwesome name='chevron-right'/></div>]
      :null}
    </div>);
  }
}

export  {
  Tag,
  TagList
}
