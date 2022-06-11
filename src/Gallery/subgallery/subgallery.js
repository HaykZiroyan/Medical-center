import React from 'react';
import {Link } from 'react-router-dom';

function Subgallery({image, text, links}) {
        
        return (
            <div className="gallerypics">
                <img src={image}  />
                <Link to={links} className="galleryImgLink">{text}</Link>
            </div>
        )
    

}
export default Subgallery