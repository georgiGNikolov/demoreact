import React from 'react';
import "./Button.css"

const Button = props => {
    return (
        <button className="styled-button" onClick = {props.onClick}>{props.text}</button>
    );
}

export default Button;