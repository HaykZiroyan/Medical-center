import React, { Component } from 'react';
import Doccomp from "./doccomp/doccomp";
import "./docs.css";
import docinfo from "./docsInfo.json";
import Slides from "../main/slider/slides"
import profs from "./profession.json";

class Doctors extends Component {
    check(docinfonew, index) {
        if (!docinfonew[Math.floor(index/4)]) { docinfonew.push([]) }
    }
    render() {
    const docinfonew = []
        return (
            <div className="bgc">

                <a href="/" className="ttl">Գլխավոր</a>
                <p className="ttl1">/ Բժիշկներ</p>
                <p className="ttls">Բժիշկներ</p>
                <div className="ends">
                    <input placeholder="Անուն, ազգանուն" className="names" />
                    <div className="searchdocs">
                        <Slides data={profs} links="/doctors"  />
                    </div>
                    <button className="srch"> <img src="searchs.png" className="imgs" /> </button>
                </div>
                
                <div className="containerdoc">
                    {
                        docinfo.map((elem, index) => {
                            this.check(docinfonew, index)
                            docinfonew[Math.floor(index/4)].push(elem)
                        }),
                    docinfonew.map((elem) => {
                        return <div className="doccopmrow">
                            {elem.map((elems) => {
                                return <Doccomp data={elems} />   
                            })}
                        </div>
                        
                    })}
                </div>


            </div>

        )

    }

}
export default Doctors