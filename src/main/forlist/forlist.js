import React, { Component } from 'react';
import Lists from "./lists/lists"

class Forpeople extends Component {
    state = {
        list: [
            {image: "forlists/patient.png", title: "Պացիենտների համար", link: "for-patient", links:[
                {"text": "Պացիենտի կրթություն", "link": "for-patient/education"}, 
                {"text": "Պացիենտների պատմություններ ", "link": "patient-stories"},
                {"text":"Հանրամատչելի հոդվածներ", "link": "articles/162"}
            ]},
            {image: "forlists/doc.png", title: "Բժիշկների համար", link: "for-doctor", links:[
                {"text": "Մասնագիտական հոդվածներ", "link": "articles/165"}, 
                {"text": "Կլինիկական դեպքեր", "link": "clinical-cases"}
            ]}
        ],
    }


    render() {
        const list = this.state.list

        return (
            // row justify-content-center
            <center className="doc-pacient">
                {list.map((elem) => {
                        return (
                            <Lists data={elem} />
                        )
                })}
                
            </center>
        )
    }
    
}
export default Forpeople