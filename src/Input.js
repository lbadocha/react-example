import React from 'react';

const Input = (props) => {
    return <input type="text" placeholder="Wpisz tekst" onChange={props.setText} />;
}

export default Input;