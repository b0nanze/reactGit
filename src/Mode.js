import React from 'react';
import {useState} from "react";

function Mode(props) {
    const [theme, setTheme] = useState();
    function switcher (){

    }
    return (
        <div className="mode">
            <button onClick={switcher}>⚪️</button>
        </div>
    );
}

export default Mode