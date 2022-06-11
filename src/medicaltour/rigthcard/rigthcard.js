import React from 'react';
import Comps from "../Comps/Comps"
import Textpart from "../Textpart/Textpart"

function Rigthcard({data}) {
        
        return (
            <div className="elemmids">
                <Textpart data={data} side="leftss" />
                <Comps data={data} side="rigthss" />
            </div>
        )
    

}
export default Rigthcard