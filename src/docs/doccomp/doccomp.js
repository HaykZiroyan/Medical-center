import React from 'react';
import { Link } from 'react-router-dom';
import "./doccomps.css"
import Docnums from "../docnumber/docnumbers"

function Doccomp({data, space}) {
    return (
        <div className={space == "opinion" ? "doccomp opinoinwidth" : "doccomp"}>
            <img src={data.profile} className="docimg" />
            <div className="docbords">
                <div className="docname">
                    {window.location.href.includes("doctors") ? <Link to={data.id} >{data.name} </Link> : <a href={`doctors/${data.id}`}>{data.name}</a>} 
                </div>
                <div>
                    <p>{data.profession}</p>
                    <p>{data.position}</p>
                </div>
                
            </div>
            <a href={"https://www.facebook.com/sharer/sharer.php?u=https://www.nairimed.com/hy/doctors/" + data.id}>
                <img src="./fb.png" className="sociallogo"></img>
            </a>
            <a href={"https://twitter.com/intent/tweet?url=https://www.nairimed.com/hy/doctors/" + data.id}>
                <img src="./twitter.png" className="sociallogo"></img>
            </a>
        </div>
    );
}
export default Doccomp