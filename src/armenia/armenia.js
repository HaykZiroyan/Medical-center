import React, { Component } from 'react';
import "./armenia.css"
import images from "./images.json"
import texts from "./texts.json"
import armenias from "./armenia.json"
import Abouts from "./elemets/elements"
class Armenia extends Component {

    render() {
        var a = 100
        const getids = (id) => {
                document.getElementById(id).classList.add("shows")
                document.getElementById(a).classList.remove("shows")
                document.getElementById(id + 900).classList.add("armli")
                document.getElementById(a + 900).classList.remove("armli")
                a = id
        }  
        return (
            <div className="bgc">
                <a href="/" className="ttl">Գլխավոր</a>
                <p className="ttl1">/ Հայաստանի մասին </p>
                <p className="ttls">Հայաստանի մասին </p>
                <div>
                    {images.map((elem, key) => {
                        return (
                            <div id={key + 100} className={key + 100 === a ? "armeniaslide shows" : "armeniaslide"}>
                                <img src={elem}  alt="" className={key%2 ===0 ? "rigthside" : "leftside"} />
                                <div className={key%2 ===0 ? "armtexts armtopone" : "armtexts armtoptwo"}>
                                    <p className="armtitle">{texts[key].title}</p>
                                    <p className="armtext">{texts[key].text}</p>
                                </div>
                            </div>
                        )
                    })}
                    <ul className="ulCenter leftrigth">
                        {images.map((elem, key) => {
                            return (
                                <li id={key + 1000} onClick={() => {getids(key + 100)}} className={key + 100 === a ? "arm armli" : "arm"}></li>
                            )
                        })}
                    </ul> 
                </div>
                <div className="elemcontainer">
                    {
                        armenias.map((elem) => {
                            return <Abouts data={elem} />
                        })
                    }
                </div>

                
            </div>

        )

    }

}
export default Armenia