import React from 'react';

function Buttons(props) {
    function plus (){
        props.setCounter (props.counter + 3)
    }
    function minus(){
        if (props.counter > 1) {
            props.setCounter(props.counter - 2)
        }
    }
    function reset(){
        props.setCounter(0)
    }
    return (
        <div className="buttons">
            <button onClick={plus} className="btnLeft">Увеличить</button>
            <button onClick={minus} className="btnMid">Уменьшить</button>
            <button onClick={reset} className="btnRight">Сбросить</button>
        </div>
    );
}

export default Buttons;