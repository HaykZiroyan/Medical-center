import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Docnum from './docnumber/docnumber';

class Docroutes extends Component {
    state = {
        routes: [
            "/132",
            "/169",
            "/13",
            "/74",
            "/99",
            "/118",
            "/93",
            "/110",
        ]
    }
    render() {
        const docroutes = this.state.routes
        return (
            <>
                {docroutes.map((elem) => {
                    {/* return <Route path={"/doctors" + elem} element={ <Docnum />} /> */}
                    <p>elem</p>
                })}
            </>

        )

    }
}
export default Docroutes
