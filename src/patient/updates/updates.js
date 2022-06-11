import React from 'react';
import updates from "../updates.json"

function Updates() {
    return (
        <div className="patientupdates">
            <p className="patientupdatetitles">Վերջին թարմացումներ</p>
            {updates.map((elem) => {
                return  <div className="patientupdateselem">
                            <div className="patientupdateselemimg">
                                <img src={elem.image} />
                            </div>
                            <div className="patientlinkdate">
                                <a href={elem.link} className="patientupdatelinks">{elem.title}</a>
                                <p className="patientupdatedate">{elem.date}</p>
                            </div>

                        </div>
            })}
            <div className="updatebut">
                <a href="news" className="more">դիտել բոլորը</a>
            </div>
        </div>

    )
}
export default Updates