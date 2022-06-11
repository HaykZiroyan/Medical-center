import React from 'react';
import {Link } from 'react-router-dom';

function Abouts({data, side}) {
        
        return (
            <div className={`medelem ${side}`}>
                <img src={data.image} className="medimg" />
                
                <Link to={data.link} className="nounderline medlink"><div className="medelemtitle">{data.title}</div></Link>
            </div>
        )
    

}
export default Abouts