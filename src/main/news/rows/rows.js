import React from 'react';
import './rows.css';

function Rows({slide}) {

    return (
        <div className="elem">
            <img src={slide.images} className="images" />
            <div className="textes">
                <p className="title">{slide.text1}</p>
                <p className="texts">{slide.text2}</p>
                <a href={slide.link} className="more">ավելին</a>
            </div>


        </div>
    );
}
export default Rows