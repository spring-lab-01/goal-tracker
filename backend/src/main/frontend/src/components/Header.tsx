import React, { FC } from 'react';
import logo from './../logo.png';
import "./../App.css"

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
    <div>
        <img src={logo} className="App-logo" alt="logo"/>
        <br/>
        <br/>

    </div>
);

export default Header;
