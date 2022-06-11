import React, { Component } from 'react';
import education from "./education.json"
import "./education.css"

class Patientedu extends Component {
    showen = 0
    getids(id) {
        document.getElementById(id).classList.add("edushow")
        if(this.showen != 0) {
            document.getElementById(this.showen).classList.remove("edushow")
        }
        this.showen = id
    }
    render() {
        

        return (
            <div className="bgc">
                <a href="/" className="ttl">Գլխավոր</a>
                <p style={{float: "left"}}>/</p>
                <a href="/for-patient" className="ttl">Պացիենտների համար</a>
                <p className="ttl1">/ Պացիենտի կրթություն</p>
                <p className="ttls">Պացիենտի կրթություն</p>
                <div>
                    <div>

                        <div>
                            <div className="eduslidetitle">
                                {
                                    education.map((elem, key) => {
                                        return <div onClick={() => {this.getids(key + 100)}} >{elem.title}</div>
                                    })
                                }
                            </div>
                            <div className="letters">abcd</div>
                        </div>
                        {
                            education.map((elem, key) => {
                                return <div id={key + 100} className="eduhide">
                                            <p>{elem.title}</p>
                                            {elem.dropdown.map((element) => {
                                                return <div><a href={element.link}>{element.text}</a></div>
                                            })}
                                        </div>
                            })
                        }
                    </div>
                    <div className="edurigth">
                        <p>Հանրամատչելի հոդվածներ</p>
                    </div>
                </div>

            </div>

        )

    }

}
export default Patientedu