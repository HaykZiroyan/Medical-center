import React, { Component } from 'react';
import "./search.css"
import services from "../sevices.json"
import Calendar from 'react-calendar';

class Medsearch extends Component {

    render() {

        return (
                <div className="searchnews">
                    <input placeholder="Որորնել" className="searchtitle"></input>
                    <input placeholder="սկիզբ - վերջ" className="searchdate"></input>
                    {/* <Calendar /> */}
                    <select className="searchprof">
                        <option value="choose" className="searchprofelem">Ընտրել ծառայությունը</option>

                        {
                            services.map((elem) => {
                                return <option value={elem.name} className="searchprofelem">{elem.name}</option>
                            })
                        }
                    </select>
                    {/* <Slides data={profs} links=""/> */}
                    <button type="submit" className="more"> <img src="searchs.png" className="srchimg" /> </button>
                </div>
        )
    }
}
export default Medsearch