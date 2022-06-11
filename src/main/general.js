import React, { Component } from 'react';
import Infos from './info/infos'
import Slider from './slider/slider'
import News from './news/news'
import First from './newsFirst/newsFirst';
import Forpeople from "./forlist/forlist";
import Lastnews from "./lastestnews/lastestNews";
import Partner from "./partner/partner";
// import Show from "./show/show";
import SlideImages from "./slideImages/slideImages"

// import Rows from "../news/rows/rows"
// import "./newsFirst.css"
class Generals extends Component { 
    render() {
        return (
            <div className="homePage">
                <Slider />
                <SlideImages />
                <Infos />
                <Forpeople />
                <First />
                <Lastnews />
                <News />
                <Partner />
            </div>
        )
    }
    
}
export default Generals