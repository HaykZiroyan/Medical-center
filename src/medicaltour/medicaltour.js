import React, { Component } from 'react';
import Comps from "./Comps/Comps"
import medinfo from "./medical.json"
import "./medical.css"

import Leftcard from "./leftcard/leftcard"
import Rigthcard from "./rigthcard/rigthcard"

class Medtour extends Component {

    render() {   
        return (
            <div>
                <a href="/" className="ttl">Գլխավոր</a>
                <p className="ttl1">/ Բժշկական տուրիզմ</p>
                <div className="allmed">
                {
                    medinfo.map((elem, key) => {
                        return key%2 === 0 ? <Leftcard data={elem} /> : <Rigthcard data={elem} />
                    })
                }
                </div>
            </div>
        )
    }
    
}
export default Medtour