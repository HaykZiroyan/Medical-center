import React, { Component } from 'react';
import Rows from "./rows/rows"
import './news.css';

class News extends Component {
    state = {
        news: [
            {link: "foreginer", text1: "Եթե Հայաստանում չեք", text2: "Մենք կօգնենք պլանավորել Ձեր այցը և գտնվելը Հայաստանում", images: "mid/second.png"},
            {link: "patient-stories", text1: "Պացիենտների պատմություններ", text2: "Պատմում են պացիենտները, որոնք բուժվել են մեր կլինիկայում", images: "mid/therd.jpg"},
            {link: "about-us", text1: "Ավելին` «Նաիրի» բժշկական կենտրոնի մասին", text2: "Առաջատար կլինիկա` Հայաստանում, որտեղ տեղացի և արտերկրի պացիենտներին ցուցաբերվում է միջազգային չափանիշներին համապատասխան բարձրորակ և բազմապրոֆիլ բուժօգնություն...", images: "mid/fourd.png"}
        ]
    }
    render() {
        const news = this.state.news
        return ( 
            <div className="middle">
                {news.map((elem) => {
                    return (
                        <Rows slide={elem} />
                    )
                })}
            </div>


        )
    }
    
}
export default News