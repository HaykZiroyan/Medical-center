import React, { Component } from 'react';
import patient from "./patient.json"
import Patientlist from "./patientlist/patientlist"
import Updates from "./updates/updates"
import "./patient.css"

class Patient extends Component {

    render() {

        return (
            <div className="bgc">
                <a href="/" className="ttl">Գլխավոր</a>
                <p className="ttl1">/  Պացիենտների համար</p>
                <p className="ttls">Պացիենտների համար</p>
                <center className="services">
                    <p className="servicetitle">{patient[0].title}</p>
                    <p className="servicetext">{patient[0].text}</p>
                </center>
                <div className="samerow patienttop">
                    <Patientlist />
                    <Updates />
                </div>
            </div>

        )

    }

}
export default Patient