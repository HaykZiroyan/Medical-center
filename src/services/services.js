import React, { Component } from 'react';
import Inform from "../aboutus/inform/inform"
// import profs from "../docs/profession.json"
import Slides from "../main/slider/slides"
import "./services.css"
import services from "../sevices.json"
import Proflists from "./proflists/proflists"

import serviseList from "./serviceList.json"

class Services extends Component {

    render() {
        // const ProgressBar = () => {
            
          
        //     const steps = [];
        //     for (let i = 0; i <= 10; i+3) {
        //       steps.push(<div>Hello</div>);
        //     }
            
        //     return (<div>{ steps }</div>);
        //   };
        return (
            <div className="bgc">
                <a href="/" className="ttl">Գլխավոր</a>
                <p className="ttl1">/ Բոլոր ծառայությունները </p>
                <p className="ttls">Բոլոր ծառայությունները </p>
                
                <div className="widths">
                    <Slides data={services} links="/doctors"/>
                </div>
                <center className="services">
                    <p className="servicetitle">{serviseList[0].title}</p>
                    <p className="servicetext">{serviseList[0].text}</p>
                </center>

                <div className="row servicListes">
                    <div className="col-xl-4 servicecolumn">
                        <Proflists data = {services} keys={0} />
                    </div>
                    <div className="col-xl-4 servicecolumn">
                        <Proflists data = {services} keys={1} />
                    </div>
                    <div className="col-xl-4 servicecolumn">
                    <Proflists data = {services} keys={2} />
                    </div>
                </div>

                <Inform />
                <br></br>
                <br></br>
            </div>

        )

    }

}
export default Services