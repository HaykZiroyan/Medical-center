import React, { Component } from 'react';
import Cols from "./cols/cols";
import "./lastNews.css";

class Lastnews extends Component {
    state = {
        lastNews: [
            {image: "cols/first.png", "link": "news", title:"Արյան մեջ սպիտակուցի մակարդակի բարձրացում", titlelink:"#", date:"11 Ապրիլ 2022", text:"Սպիտակուցի քանակն արյան մեջ սպիտակուցային փոխանակության կարևոր ցուցանիշ է: Եթե սպիտակուցի քանակը բարձր է, անհրաժեշտ են համակարգային հետազոտություններ..."},
            {image: "cols/second.png", "link": "news", title:"Վտանգավո՞ր է զկռտոցը, ինչպե՞ս վերացնել", titlelink:"#", date:"08 Ապրիլ 2022", text:"Մի քանի հարյուրամյակ առաջ մարդիկ հավատացել են, որ զկռտոցը կապված է երեխաների աճի շրջանի հետ: Մարդկանց մեծ մասը հիմա էլ լավ չի հասկանում, թե ինչի հետ է կապված այս ֆիզիոլոգիական երևույթը։ Պարզենք, թե ինչ են այդ մասին ասում ժամանակակից գիտնականները..."},
            {image: "cols/three.png", "link": "news", title:"Որդանման ելուն (ապենդիքս). ավելո՞րդ, թե՞ կարևոր օրգան", titlelink:"#", date:"05 Ապրիլ 2022", text:"Ժամանակակից հետազոտողները համարում են, որ այն մարդու օրգանիզմում իրականացնում է մի շարք կարևոր գործառույթներ՝ օրգանիզմի ներքին ստերիլ միջավայրը պաշտպանելով ախտածին վարակներից․․․"}
        ]
    }
    
    render() {
       const cols = this.state.lastNews
        
        return (
            <div>
                <p className="last">Վերջին նորություններ</p>
                <div className="cont">
                    {cols.map((elem) => {
                        return <Cols data={elem} />
                    })}
                </div>
                <center><a href="news" className="more">ավելին </a></center>
                
            </div>
        )
    }
    
}
export default Lastnews