import React, { Component } from 'react';
import Texts from "./texts/texts"
import Inform from "./inform/inform"
import "./aboutus.css";
import texts from "./texts/texts.json";


class About extends Component {
    
    render() {

        return (
            <div className="bgc">
                <a href="/" className="ttl">Գլխավոր</a>
                <p className="ttl1">/ Մեր մասին</p>
                <p className="ttls">Մեր մասին</p>
                
                <center>
                    <p className="nbk">Նաիրի բժշկական կենտրոն</p>
                    <p className="bh">Բազմապրոֆիլ հիվանդանոց</p>
                </center>

                <Texts />

                <center>
                    <p className="nbkk">Նաիրի ԲԿ-ն կազմակերպում է արտերկրի պացիենտների բժշկական տուրիզմի նպատակով Հայաստան այցելելու ամբողջ փաթեթը</p>
                    <p className="if">Եթե Հայաստանում չեք</p>
                    <p className="help">Մենք կօգնենք Ձեզ պլանավորել Ձեր այցը և մնալը Հայաստանում</p>
                    <a href="foreginer" className="more">ավելին</a>
                </center>

                <Inform />
                
                <center className="btb">
                    <p className="bt" >Բժշկական տուրիզմի մասին ավելին իմանալու համար սեղմեք ստորև հղումը</p>
                    <a href="medical-tourism" className="more">բժշկական տուրիզմ</a>
                </center>
            </div>

        )

    }

}
export default About