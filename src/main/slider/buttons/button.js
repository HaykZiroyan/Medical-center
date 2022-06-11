import React from 'react';
import './button.css';

function But(props) {
    const open = (id) => {
        document.getElementById(id+500).classList.add("showen")
    }
    return (
        <button id={props.keys} onClick={() => {open(props.keys)}} className="contact">
            <img src={props.link} />
            <p>{props.text}</p>
        </button>
    );
}
export default But