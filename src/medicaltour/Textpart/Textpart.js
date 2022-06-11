import React from 'react';


function Textpart({data, side}) {
        
        return (
            <div className={`medelemtextss ${side}`}>
                {
                    data.hasOwnProperty("texttitle") ? <p className="medtexttitle">{data.texttitle}</p> : ""
                }
                {
                    data.texts.map((elem) => {
                        return <p className="medelemtexttag">{elem}</p>
                    })
                }
            </div>
        )
    

}
export default Textpart