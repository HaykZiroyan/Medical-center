import React from 'react';
import {Link } from 'react-router-dom';

function Abouts({data}) {
        
        return (
            <div className="aboutelem">
                <img src={data.image} className="aboutelemimg" />
                
                <Link to={data.link} className="nounderline"><div className="aboutelemtitle">{data.title}</div></Link>
            </div>
        )
    

}
export default Abouts