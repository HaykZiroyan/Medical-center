import React from 'react';
import "./texts.css"
import texts from "./texts.json";

function Texts () {
        var a = 100
        const getids = (id) => {
                document.getElementById(id).classList.add("showen")
                document.getElementById(a).classList.remove("showen")
                document.getElementById(id + 900).classList.add("texted")
                document.getElementById(a + 900).classList.remove("texted")
                a = id
        }
        return (
            <div>
                {texts.map((elem, key) => {
                    return (
                        <table id={key + 100} className={key + 100 ==a ? "aboutus showen" : "aboutus"}>
                            <tr>
                            <td className="text-col">
                                <img className="col-img" src={elem.image} />
                            </td>
                            <td className="text-col">
                                <p className="titls" href={elem.tabs}>{elem.title}</p>
                                {elem.textes.map((each) => {
                                    return <p className="abouttexts">{each}</p>
                                })}
                                {elem.uls ? <ul>{ elem.uls.map((each) => {return <li>{each}</li>})} </ul> : ""}
                            </td>
                            </tr>
                        </table>
                    )
                })}
                <div className="row rows flex">
                    {texts.map((elem, key) => {
                        return (
                            <div id={key + 1000} onClick={() => {getids(key + 100)}} className={key + 100 ==a ? "col cols texted" : "col cols"}>{elem.title}</div>
                        )
                    })}
                </div>
            </div>
        )
}
export default Texts