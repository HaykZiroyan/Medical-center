import React from 'react';
import part from "./partner.json";
import "./partner.css"

function Partner() {
    const list = []
    for (var i = 0; i < Math.ceil(part.length / 4); i++) {
        list[i] = new Array()
        for (var j = 0; j < 4; j++) {
            if (part[4 * i+j]) {
                list[i][j] = part[4 * i +j]
            }
        }
    }
    let a = 100
    const getids = (id) => {
    //  document.getElementsById("1").classList.remove("showen");
        document.getElementById(id).classList.add("showen")
        document.getElementById(a).classList.remove("showen")
        document.getElementById(id + 900).classList.add("clicked")
        document.getElementById(a + 900 ).classList.remove("clicked")
        a = id
    }
    return (
        <div className="part">
            <p className="last uper">գործընկերներ</p>
            <center>
            <hr></hr>
                {list.map((elem, key) => {
                    return <div id={key + 100 } className={key + 100 ==a ? 'partnerlist showen' : 'partnerlist' }>
                        {elem.map((each) => {
                            return <a href={each.link} className="parts"><img src={(each.image)} /></a>
                        })}
                    </div>
                })}
                <div className="bb">
                    {list.map((elem, key) => {
                        return <span id={key + 1000} className={key + 100 == a ? 'clicks clicked' : 'clicks' } onClick={() => {getids(key + 100)}}></span>
                    })}
                </div>
            </center>

        </div>
    );
}
export default Partner