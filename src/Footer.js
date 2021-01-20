import React from 'react';
import LogoFooter from "./LogoFooter";
import MenuFooter from "./MenuFooter";
import Copyright from "./Copyright";

function Footer(props) {
    return (
        <div className="footer">
            <LogoFooter />
            <MenuFooter />
            <Copyright />
        </div>
    );
}

export default Footer;