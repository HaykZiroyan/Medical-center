import React from 'react';
import "./slider.css";

function Slider({data}) {
    let a = 0
    let backgroundcolor = 1000
    const getids = (id) => {
    //  document.getElementsById("1").classList.remove("showen");
     document.getElementById(id).classList.add("showen")
     document.getElementById(a).classList.remove("showen")
     document.getElementById(id+1000).classList.add("backcolor")
     document.getElementById(backgroundcolor).classList.remove("backcolor")
     backgroundcolor = id + 1000
     a = id
    }
    return (
        <div>
            {Object.keys(data.info).map((value, key)=> (
               <div id={key+1000} className={ key+1000 === backgroundcolor ? "doclist backcolor" : "doclist"} onClick={() => {getids(key)}}>{data.info[value].title}</div>
            ))}
            <hr className="higher" />
            <div className="elemplace">
               {Object.keys(data.info).map((value, key)=> (
                  <div key={key} id={key} className={key==a ? 'elements showen' : 'elements' }>
                     <p>{data.info[value].title}</p>
                        {data.info[value].hasOwnProperty("text") ? <p>{data.info[value].text}</p> : console.log("no")}
                        {data.info[value].hasOwnProperty("date") ? <p>{data.info[value].date}</p> : console.log("no")}
                        {data.info[value].hasOwnProperty("study") ? <p>{data.info[value].study}</p> : console.log("no")}
                        {/* {data.info[value].hasOwnProperty("list") ? <div>{data.info[value].list.map((values) => (console.log(`${values.image}`)))}</div> : console.log("no")} */}

                  </div>
               ))}
            </div>
        </div>

    )
}
export default Slider
