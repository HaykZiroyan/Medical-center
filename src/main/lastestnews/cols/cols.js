import React from 'react';
import "./cols.css";
import { Link } from 'react-router-dom';

function Cols ({data}) {

    return (
        <div className="columns">
            <img src={data.image} className="imges" alt="" />
            <div className="divcols">
                <Link to={data.link + '/' + data.title.replace(/ /gi, "-")} className="titleCols">{data.title}</Link>
                <p className="date">
                    {data.date} | 
                    <span>
                        <a href={data.link} className="links">լուրեր</a>
                    </span>
                </p>
                <p className="txt">{data.text}</p>

            </div>
        </div>
    );
}
export default Cols