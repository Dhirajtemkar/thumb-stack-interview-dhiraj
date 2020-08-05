import React from 'react';
import './TicTak.css';

// props passed are value of the box and the onclick function
function Square(props) {
    return (
        <button className="Square__single" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Square
