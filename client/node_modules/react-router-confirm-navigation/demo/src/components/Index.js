import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Index = ({ children }) => {
  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/page'>Page</Link></li>
        <li><Link to='/page-two'>Psage Two</Link></li>
      </ul>
      {children}
    </div>
  );
};

Index.propTypes = {
  children: PropTypes.element
};

export default Index;
