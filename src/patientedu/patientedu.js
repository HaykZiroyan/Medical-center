import React, { Component } from 'react';
import education from "./education.json"
import "./education.css"
import edunews from "./edunews.json"

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
        const arm = ["Ա", "Բ", "Գ", "Դ", "Ե", "Զ", "Է", "Ը", "Թ", "Ժ", "Ի", "Լ", "Խ", "Ծ", "Կ", "Հ", "Ձ", "Ղ", "Ճ", "Մ", "Յ", "Ն", "Շ", "Ո", "Չ", "Պ", "Ջ", "Ռ", "Ս", "Վ", "Տ", "Ր", "Ց", "ՈՒ", "Փ", "Ք", "և", "Օ", "Ֆ"]
        

        return (
            <div className="bgc">
                <a href="/" className="ttl">Գլխավոր</a>
                <p style={{float: "left"}}>/</p>
                <a href="/for-patient" className="ttl">Պացիենտների համար</a>
                <p className="ttl1">/ Պացիենտի կրթություն</p>
                <p className="ttls">Պացիենտի կրթություն</p>
                <div className="edurow educontainer">
                    <div className="eduleft">
                        <div className="edurow">
                            <div className="eduslidetitle">
                                {
                                    education.map((elem, key) => {
                                        return <div onClick={() => {this.getids(key + 100)}} className="eduslidetitles">{elem.title}</div>
                                    })
                                }
                            </div>
                            <div className="letters">
                                <div className="letterback">
                                {
                                    arm.map((elem) => {
                                        return <button>{elem}</button>
                                    })
                                }
                                </div>
                            </div>
                        </div>
                        {
                            education.map((elem, key) => {
                                return <div id={key + 100} className="eduhide">
                                            <p className="eduhidetitle">{elem.title}</p>
                                            <div className="edurow">
                                                {elem.dropdown.map((element) => {
                                                    return <div className="edulist"><a className="eduhidelink" href={element.link}>{element.text}</a></div>
                                                })}                                                
                                            </div>

                                        </div>
                            })
                        }
                    </div>
                    <div className="edurigth">
                        <p className="edurigthtitle">Հանրամատչելի հոդվածներ</p>
                        {
                            edunews.map((elem) => {
                                return <div className="edunewselem edurow">
                                            <div className="edunewselemimage">
                                                <img src={elem.image} className="edunewselemimg" />
                                            </div>
                                            <div className="edunewselemdiv">
                                                <a href={`/article/${elem.title.replace(' /i', '-')}`} className="edunewselemlink">
                                                    <p className="edunewselemsrc">{elem.title}</p>
                                                </a>
                                                <p className="edunewselemdate">{elem.date}</p>
                                            </div>
                                        </div>
                            })
                        }
                        <div className="edurigthlinkplace">
                            <a href="articles/162" className="edurigthlink">Դիտել բոլորը</a>
                        </div>
                        
                    </div>
                </div>

            </div>

        )

    }

}
export default Patientedu