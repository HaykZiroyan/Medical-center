import React from 'react';
import './li.css';
import { Link } from 'react-router-dom';

function Column(props) {
    return (
        <li className="nav-item">
            <Link className={[props.size, "nav-link"].join(' ')} to={props.link}>{props.text}</Link>
        </li>
    );
}
export default Column