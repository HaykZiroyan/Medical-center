import React, { Component } from 'react';
import './slider.css';
import But from './buttons/button';
import List from './list/list';
import docs from "../../docs/docsInfo.json"
import profs from "../../docs/profession.json"
import services from "../../sevices.json"

import { Link } from 'react-router-dom';
import Slides from "./slides"
class Slider extends Component {
    state = {
        button: [
            {text:"Առցանց կապ", image: './topButtons/first.png', key:1},
            {text:"Գտնել բժիշկ", image: './topButtons/second.png', key:2},
            {text:"Ծառայություններ", image: './topButtons/third.png',key:3}
        ],
        slides: [
            "./slider/doc1.jpg",
            "./slider/doc2.jpg",
            "./slider/doc3.jpg",
            "./slider/doc4.jpg",
            "./slider/doc5.jpg",
            "./slider/doc6.jpg"
        ]
    }

    // constructor(props) {
    //     super(props);
    //       this.state.slides = {
    //         classes: true 
    //       };
    // }  
    constructor(props) {
        super(props);
        this.setChanged = this.setChanged.bind(this);
      }
    
      // Function to set the parent's state
      setChanged() {
        this.setState({ changed: true });
      }
    
    close = value => () => {
        document.getElementById(value).classList.remove("showen")
    }

    render() {
        const inform = this.state.button
        const slides = this.state.slides

        return (
            <div className="buttonPlace">
                <div className="buts">
                    {inform.map((elem) => {
                        return (
                            <But keys={elem.key} text={elem.text} link={elem.image}/>
                        )
                    })}
                </div>
                <div id="501" className="contshide">
                    <div onClick={this.close("501")}>
                        <i class="fas fa-times gray"></i>
                    </div>
                    <div className="arcanc">
                        <img src="./topButtons/first.png"></img>
                        Առցանց կապ
                    </div>
                    
                    <div className="conactnum">
                        <a href="tel:+374 10 53 75 00" className="logo">
                            <img src="./socialmedia/number.png" />
                        </a>
                        <div className="information">
                            <p className="texts1">Ընդունարան</p>
                            <p className="texts2">+374 10 53 75 00, 8 900, 8 999</p>  
                        </div>
                    </div>
                    <div className="conactnum">
                        <a  href="https://wa.me/+374 91 55 51 56" className="logo">
                            <img src="./socialmedia/whatsap.png" />
                        </a>
                        <div className="information">
                            <p className="texts1">Whatsap</p>
                            <p className="texts2">+374 91 55 51 56</p>  
                        </div>
                    </div><div className="conactnum">
                        <a href="viber://chat?number=%2B374 91 55 51 56" className="logo">
                            <img src="./socialmedia/viber.png" />
                        </a>
                        <div className="information">
                            <p className="texts1">Viber</p>
                            <p className="texts2">+374 91 55 51 56</p>  
                        </div>
                    </div>
                </div>

                <div id="502" className="contshide">
                    <div onClick={this.close("502")}>
                        <i class="fas fa-times gray"></i>
                    </div>
                    <div className="arcanc">
                        <img src="./topButtons/second.png"></img>
                        Գտնել բժիշկ
                    </div>
                    <br></br>
                    <div>
                        <p className="searchs">Որոնել` ըստ անուն-ազգանունի</p>
                        {/* <select onChange={() => this.value ? window.location.href = this.value : ""}>
                            <option value="">ընտրել</option>
                             {docs.map((elem) => {
                                return <option key={elem.link}><a href={elem.link}>{elem.name}</a></option>
                            })}
                        </select> */}
                        <Slides data={docs} links="/doctors/"/>
                        <p className="searchs">Որոնել` ըստ մասնագիտության</p>
                        <Slides data={profs} links="/doctors"/>
                    </div>
                </div>
                <div id="503" className="contshide">
                    <div onClick={this.close("503")}>
                        <i class="fas fa-times gray"></i>
                    </div>
                    <div className="arcanc">
                        <img src="./topButtons/third.png"></img>
                        Ծառայություններ
                    </div>
                    <br></br>
                    <div>
                        <p className="searchs">Ընտրել ծառայությունը</p>
                        <Slides data={services} links="/services/" />
                    </div>
                </div>                
            </div>
        )
    }
    
}
export default Slider