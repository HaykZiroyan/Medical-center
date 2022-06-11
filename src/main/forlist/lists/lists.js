import React from 'react';
import "./lists.css"
import { Link } from 'react-router-dom';

function Lists({data}) {

    return (
        <center className="coles">
            <img className="img" src={data.image} />
            <p className="titles">{data.title}</p>
            <Link to={data.link} className="btn">Բոլոր ռեսուրսները</Link>
            <p className="mores">Խորհուրդ տրվող հղումներ</p>
            <div>
                {data.links.map((elem)=>{
                    return (
                        <a href={elem.link} className="links">{elem.text}</a>
                    )
                })}
            </div>

        </center>
    );
}
export default Lists