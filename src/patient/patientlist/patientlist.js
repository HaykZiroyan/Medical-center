import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import patientlist from "../patientlist.json"


class Patientlist extends Component {
    check(docinfonew, index) {
        if (!docinfonew[Math.floor(index/3)]) { docinfonew.push([]) }
    }
    render() {
        const patientlistnew = []

        return (
            <div className="patientnews">
                {
                    patientlist.map((elem, index) => {
                            this.check(patientlistnew, index)
                            patientlistnew[Math.floor(index/3)].push(elem)
                        }),
                    patientlistnew.map((elem) => {
                        
                        return <div className="samerow medicallist">{elem.map((elems) => {
                            return <div className="samerowelem">
                                <a href={elems.link}>{elems.title}</a>
                                <p>{elems.text}</p>
                                
                            </div> 
                        })}
                        </div>
                    })
                }
            </div>
        )
    }
}
export default Patientlist