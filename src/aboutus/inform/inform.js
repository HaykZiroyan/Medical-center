import React from 'react';
import "./inform.css"
import informs from "./inform.json"
function Inform () {  
        return (
                <center className="about">
                    <p className="nbks">Ավելին` «Նաիրի» բժշկական կենտրոնի մասին</p>
                    <div className="rowss">
                        {informs.map((elem) => {
                            return <div className="colss">
                                        <img src={elem.image} className="image" />
                                        <br />
                                        <a href={elem.link} className="link">{elem.title}</a>
                                        <p className="txt">{elem.text}</p>
                                    </div>
                        })}
                    </div>
                </center>        
        )
}
export default Inform