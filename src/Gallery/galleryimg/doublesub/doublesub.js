import React from 'react';
import {Link } from 'react-router-dom';

function Doublesub({data}) {
        
        return (
        <div className="doublegallerypics" style={{background: `url(${data.image})`,  backgroundRepeat: "no-repeat", backgroundSize: "100% 80%"}}>
            {/* <img src={data.image} className="doubleimg" /> */}
            <div className="doublegalleryImgLinkdiv">
                <Link to={data.link} className="doublegalleryImgLink">{data.title}</Link>
            </div>
        </div>
        )
    

}
export default Doublesub