import React from 'react';

function OperatopTer(props) {
    const isDay = props.hours < 18;

    return(isDay ? "сейчас день": "сейчас вечер")
}

export default OperatopTer;