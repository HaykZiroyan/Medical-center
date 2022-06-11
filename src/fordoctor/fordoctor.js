import React, { Component } from 'react';
import docnews from "./docnews.json"
class Doctors extends Component {
    check(docinfonew, index) {
        if (!docinfonew[Math.floor(index/3)]) { docinfonew.push([]) }
    }
    render() {
        const patientlistnew = []
        return (
            <div className="bgc">

                <a href="/" className="ttl">Գլխավոր</a>
                <p className="ttl1">/ Բժիշկների համար </p>
                <p className="ttls">Բժիշկների համար </p>
                
                {
                    docnews.map((elem, index) => {
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
export default Doctors