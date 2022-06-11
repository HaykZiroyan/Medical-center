import React, { Component } from 'react';
import profs from "../docs/profession.json"
import Slides from "../main/slider/slides"
import "./news.css"
class News extends Component {

    render() {

        return (
            <div className="bgc">
                <a href="/" className="ttl">Գլխավոր</a>
                <p className="ttl1">/ Լուրեր</p>
                <p className="ttls">Լուրեր</p>

                <div className="searchnews">
                    <input placeholder="Որորնել" className="searchtitle"></input>
                    <input placeholder="սկիզբ - վերջ" className="searchdate"></input>
                    <input placeholder="Ընտրել ծառայությունը" className="searchprof"></input>
                    {/* <Slides data={profs} links=""/> */}
                    <button type="submit" className="more"> <img src="searchs.png" className="srchimg" /> </button>
                </div>

            </div>

        )

    }

}
export default News