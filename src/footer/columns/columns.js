import React from 'react';
import Column from './column/column';
import './columns.css';

function Columns({list}) {
        
        return (
            <div className={list[0]["clname"]}>
                <nav className="navbar">
                    <ul className="navbar-nav">
                        {list.map((elem) => {
                            return (
                                <Column text={elem.name} link={elem.link}/>
                            )
                        })} 
                    </ul>
                </nav>
            </div>
        )
    

}
export default Columns