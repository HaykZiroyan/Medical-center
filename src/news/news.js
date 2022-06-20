import React, { Component } from 'react';
import profs from "../docs/profession.json"
import Slides from "../main/slider/slides"
import "./news.css"
import Medsearch from "../search/search"
import { Link } from 'react-router-dom';
import news from "./news.json"
import newsleft from "./newsleft.json"

class News extends Component {

    render() {

        return (
            <div className="bgc">
                <a href="/" className="ttl">Գլխավոր</a>
                <p className="ttl1">/ Լուրեր</p>
                <p className="ttls">Լուրեր</p>
                
                <Medsearch />

                <div className="storyrow">
                    <div className="storyleft news">
                        {
                            newsleft.map((elem) => {
                                return <div className="newselem">
                                            <img src={elem.image} className="newsimg" />
                                            <div>
                                                <Link to={elem.link} className="newselemlink biglink">{elem.title}</Link>
                                                <p className="newstext">{elem.text}</p>  
                                                <p className="newsdate">{elem.date}</p> 
                                                <span>
                                                    {elem.prof.map((element) => {
                                                        return <span>| <a href={element.proflink} className="newselemlink smalllink">{element.profname}</a></span>
                                                    })}
                                                </span>
                                                <span>
                                                    {elem.docinfo.map((element) => {
                                                        return <span>| <a href={element.doclink} className="newselemlink smalllink">{element.docname}</a></span>
                                                    })}
                                                </span>
                                            </div>                                          
                                </div>
                            })
                        }
                    </div>
                    <div className="storyrigth">
                        <p className="mostread">Ամենաընթերցված հոդվածները</p>
                        {
                            news.map((elem ,key) => {
                                return key<4 ? <div className="mostreadstoryrigth">
                                            <img src={elem.image} className="storyelemimgrigth" />
                                            <div className="elemstorytxtsrigth">
                                                <Link to={elem.link} className="elemstorylinkrigth">{elem.title}</Link>
                                                <p className="storyelemtextrigth">{elem.date}</p>
                                            </div>
                                </div> : ""
                            })
                        }
                    </div>
                </div>
            </div>

        )

    }

}
export default News