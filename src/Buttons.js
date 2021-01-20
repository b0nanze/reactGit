import React from 'react';

function Buttons(props) {
    return (
        <div className="buttons">
            <button className="btnLeft">Увеличить</button>
            <button className="btnMid">Уменьшить</button>
            <button className="btnRight">Сбросить</button>
        </div>
    );
}

export default Buttons;