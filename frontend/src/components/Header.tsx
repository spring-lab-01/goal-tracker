import React, { FC } from 'react';
import logo from './../logo.png';
import "./../App.css"

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div>
      <div className="nav-wrapper">
            <img src={logo} className="App-logo" alt="logo"/>
      </div>
  </div>
);

export default Header;
