import React, { Component } from 'react';
import Rows from "../news/rows/rows"
import "./newsFirst.css"
class First extends Component {
    state = {
        first: [
            {text1: "Ստանալ երկրորդ կարծիք", text2: "Զանգահարել +374 10 53 75 00, 8 900, 8 999 ", images: "mid/first.png", "link": "second-opinion"}
        ]
    }
    
    render() {
        const first = this.state.first[0]
        return (
            <div className="newsFirst">
                <Rows slide={first} />
            </div>
        )
    }
    
}
export default First