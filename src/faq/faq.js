import React, { Component } from 'react';
import faqs from "./faq.json"
import "./faq.css"

class Faq extends Component {
    render() {
        var active = 0;
        function getids(num) {
            document.getElementById(active).classList.remove("clicked")
            document.getElementById(num).classList.add("clicked")
            document.getElementById(active + 100).classList.remove("active")
            document.getElementById(num + 100).classList.add("active")
            active = num
            console.log(num)
        }
        return (
            <div className="bgc">
                <a href="/" className="ttl">Գլխավոր</a>
                <p className="ttl1">/ Հաճախ տրվող հարցեր</p>
                <p className="ttls">Հաճախ տրվող հարցեր</p>
                <div className="row">
                    <div className="col-md-6">
                        {
                            faqs.map((elem, key) => {
                                return <div id={key} onClick={() => {getids(key)}} className={key === active ? "faq clicked" : "faq"}>
                                            <p className="faqp">{elem.title}</p>
                                            <img src="./right-arrow1.png" className="rightarrow" />
                                        </div>
                            })
                        }
                    </div>
                    <div className="col-md-6 faqrigth">
                    {
                            faqs.map((elem, key) => {
                                return <div id={key + 100} className={key === active ? "faqhide active" : "faqhide"}>
                                            <p className="faqps">{elem.text}</p>
                                        </div>
                            })
                        }
                    </div>
                </div>
            </div>

        )

    }

}
export default Faq