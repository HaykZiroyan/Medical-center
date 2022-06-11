import React from 'react';
import './li.css';

function First(props) {
    return (
        <li className="nav-item">
            <a className={[props.size, "nav-link"].join(' ')} href={props.link}>{props.text}</a>
        </li>
    );
}
export default First

// export default (props) => {
//     return (  
//         <li className={"nav-item "}>
//             <a className={"nav-link"} href="https://www.nairimed.com/hy/contacts">{props.text}</a>
//         </li>
//     );
// }