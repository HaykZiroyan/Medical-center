import React from 'react';
import positions from "./our-team.json";
import Doccomp from "../../docs/doccomp/doccomp"

function Positions () {
        var a = 100
        const getids = (id) => {
                document.getElementById(id).classList.add("shows")
                document.getElementById(a).classList.remove("shows")
                document.getElementById(id + 900).classList.add("teamchange")
                document.getElementById(a + 900).classList.remove("teamchange")
                a = id
        }
        return (
            <div>
                <div className="row teamrow">
                    {console.log(Object.keys(positions))}
                    {Object.keys(positions).map((elem, key) => {
                        return (
                            <div id={key + 1000} onClick={() => {getids(key + 100)}} className={key + 100 === a ? "col teamchange" : "col"}>{elem}</div>
                        )
                    })}
                    <hr />
                </div>
                {Object.keys(positions).map((elems, key) => {
                    return (
                        <div id={key + 100} className={key + 100 === a ? "teamslide shows" : "teamslide"}>
                            {positions[elems].map((elem) => {
                                return <Doccomp data={elem} />
                            })}
                        </div>
                    )
                })}

            </div>

        )
    

}
export default Positions