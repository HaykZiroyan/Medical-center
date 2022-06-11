import React from 'react';
import './column.css'
function Columns({datas}) {

    return (
        <center className="col-xl-4 col-lg-4 col-md-6 cols" style={{ backgroundColor: datas.color}}>
            <p className="text1">{datas.text1}</p>
            <p className="text2">{datas.text2}</p>
            <a className="buttons" href={datas.links}>{datas.but}</a>
        </center>
    );
}
export default Columns