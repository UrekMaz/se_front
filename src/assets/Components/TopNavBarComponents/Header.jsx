import React from 'react';
import './Header.css';
import { Router } from 'react-router-dom';

function Header(props) {
  return (
    <div className="header-text">
      {props.name}
    </div>
  );
}

export default Header;
