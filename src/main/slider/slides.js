import React, {useState} from 'react';
import {Link } from 'react-router-dom';
function Slides({data, links}) {
    const [isActive, setIsAcive] = useState(false)        

    return (
        <div className="dropdown">
            <div className="dropsown-btn" onClick={(e) => setIsAcive(!isActive)} >ընտրել</div>
            {isActive && (
                <div className="dropdown-content" style={links=="/services/" ? {width:"500px"} : {}}>
                    {data.map((elem) => {
                        return <Link to={links + elem.link} className="dropdown-item">{elem.name}</Link>
                    })}
                </div>
            )}
            
        </div>
    );
}
export default Slides