import React from 'react';
import Comps from "../Comps/Comps"
import Textpart from "../Textpart/Textpart"

function Leftcard({data}) {
        
        return (
            <div className="elemmids">
                <Comps data={data} side="leftss" />
                <Textpart data={data} side="rigthss" />
            </div>
        )
    

}
export default Leftcard