import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";
import Mode from "./Mode";


function Header(props) {
    return (
        <div  className="header">
            <Logo />
            <Menu />
            <Mode />
        </div>
    );
}

export default Header;