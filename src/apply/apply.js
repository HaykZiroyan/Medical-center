import React, { Component } from 'react';
import data from "./apply.json"
import "./applys.css"

class Apply extends Component {

    render() {
        let a = 0
        let backgroundcolor = 1000
        const getids = (id) => {
        //  document.getElementsById("1").classList.remove("showen");
         document.getElementById(id).classList.add("applyshows")
         document.getElementById(a).classList.remove("applyshows")
         document.getElementById(id+1000).classList.add("backcolor")
         document.getElementById(backgroundcolor).classList.remove("backcolor")
         backgroundcolor = id + 1000
         a = id
        }
        return (
            <div className="bgc">
                <a href="/" className="ttl">Գլխավոր</a>
                <p className="ttl1">/ Ինչու՞ դիմել մեզ</p>
                <p className="ttls">Ինչու՞ դիմել մեզ</p>
                <div className="applycontainer">
                    <div className="applyrow">
                        {data.map((elem, key)=> (
                            <div id={key+1000} className={ key+1000 === backgroundcolor ? "backcolor" : ""} onClick={() => {getids(key)}}>{elem.info}</div>
                        ))}
                    </div>
                    <hr className="higher" />
                    <div className="elemplace">
                        {data.map((elem, key)=> (
                            <div key={key} id={key} className={key==a ? 'applyslide applyshows' : 'applyslide' }>
                                <div className="applyleft">
                                    {elem.text.map((elems) => {
                                        return <p className="applytexts">{elems}</p>
                                    })}
                                    <a href={elem.link} className="applylinks">Կարդալ ավելին...</a>
                                </div>
                                <div className="applyrigth">
                                    <img src={elem.image} />
                                </div>
                            </div>
                        ))}
                    </div>
                
                    <center className="apllycenter">
                        <p>Կարևոր փաստաթղթեր</p>
                        <a href="#">Գիտական և գործնական</a>
                    </center>
                </div>


            </div>

        )

    }

}
export default Apply