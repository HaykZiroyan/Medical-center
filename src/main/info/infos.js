import React, { Component } from 'react';
import './infos.css';
import Columns from './column/column';

class Infos extends Component {
    state = {
        info: [
            {text1: "Բժշկական տուրիզմ", text2: "Բոլոր ռեսուրսները` մեկ տեղում", but:"ավելին", color: "#2584b4", "links": "about-armenia"},
            {text1: " Ինչու՞ դիմել մեզ", text2: "Մեր առանձնահատկությունները", but:"ավելին", color: "#006991", "links": "why-apply-to-us"},
            {text1: "Հաճախ տրվող հարցեր", text2: "Ունե՞ք հարցեր", but:"Պատասխանը փնտրել այստեղ", color: "#2a93ca", "links": "faq"}
        ],
    }


    render() {
        const infos = this.state.info

        return (
            <center className="row justify-content-center infos">
                {infos.map((elem) => {
                        return (
                            <Columns datas={elem} />
                        )
                    })}
                {/* <div className="col-xl-4 col-lg-4 col-md-6">text1</div>
                <div className="col-xl-4 col-lg-4 col-md-6">text2</div>
                <div className="col-xl-4 col-lg-4 col-md-6">text3</div> */}
            </center>
        )
    }
    
}
export default Infos