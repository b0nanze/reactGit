import React from 'react';

function CheckProp(props) {
    return(
        <div>
            {props ? "первый текст" : "второй текст"}
        </div>
    );
}

export default CheckProp;