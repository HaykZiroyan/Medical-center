import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import profs from "../docs/profession.json"
import Slides from "../main/slider/slides"
import "./storys.css"
import story from "./patstorys.json"
import Medsearch from "../search/search"
class Patstory extends Component {

    render() {

        return (
            <div className="bgc">
                <a href="/" className="ttl">Գլխավոր</a>
                <p className="ttl1">/ Պացիենտների պատմություններ</p>
                <p className="ttls">Պացիենտների պատմություններ</p>

                {/* <div className="searchnews">
                    <input placeholder="Որորնել" className="searchtitle"></input>
                    <input placeholder="սկիզբ - վերջ" className="searchdate"></input>
                    <input placeholder="Ընտրել ծառայությունը" className="searchprof"></input>
                    {/* <Slides data={profs} links=""/> */}
                   {/*} <button type="submit" className="more"> <img src="searchs.png" className="srchimg" /> </button>
                </div> */}
                <Medsearch />
                <div className="storyrow">
                    <div className="storyleft">
                        {
                            story.map((elem) => {
                                return <div className="storyelem">
                                            <img src={elem.image} className="storyelemimg" />
                                            <div className="elemstorytxts">
                                                <Link to={elem.link} className="elemstorytitle">{elem.title}</Link>
                                                <p className="elemstorytext">{elem.text}</p>
                                                <span className="elemstorydate">{elem.date}</span>
                                                <span> | </span>
                                                <a href="services/ortopedia-ev-vnasvatsqabanutyun-koqsa-klinika" className="elemstorylinksbottn">Օրթոպեդիա և վնասվածքաբանություն, «Կոքսա» կլինիկա</a>
                                                <span> | </span>
                                                <a href={elem.doclink} className="elemstorylinksbottn">{elem.docname}</a>
                                            </div>
                                </div>
                            })
                        }
                    </div>
                    <div className="storyrigth">
                        <p className="mostread">Ամենաընթերցված հոդվածները</p>
                        {
                            story.map((elem) => {
                                return <div className="mostreadstoryrigth">
                                            <img src={elem.image} className="storyelemimgrigth" />
                                            <div className="elemstorytxtsrigth">
                                                <Link to={elem.link} className="elemstorylinkrigth">{elem.title}</Link>
                                                <p className="storyelemtextrigth">{elem.date}</p>
                                            </div>
                                </div>
                            })
                        }
                    </div>
                </div>

            </div>

        )

    }

}
export default Patstory