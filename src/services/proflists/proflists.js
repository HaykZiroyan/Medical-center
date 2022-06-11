import React from 'react';
import { Link } from 'react-router-dom';

function Proflists({data, keys}) {
  
    return (
        data.map((elem, index) => {
            return index%3 === keys && elem.name != null ? <div className="columnelem">
                                        {console.log(typeof(elem.name))}
                                        <Link to={elem.link} className="srevicecolelem">
                                            <img src={require("../..//pics/services/arrow-square-right.ico")} />
                                            {elem.name}
                                        </Link> 
                                    </div> : ""
        })
  
    )
  }
  
  export default Proflists
  