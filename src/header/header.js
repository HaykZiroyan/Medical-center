import React, { Component } from 'react';
import First from './firstrow/li';
import './header.css';



class Top extends Component {
    state = {
        menulist: [
            {name: "Մեր մասին", link: "/about-us"}, 
            {name: "Մեր թիմը", link: "/our-team"}, 
            {name: "Բժիշկներ", link: "/doctors"}, 
            {name: "Ծառայություններ", link: "/service"}, 
            {name: "Լուրեր", link: "/news"}, 
            {name: "Տեսադարան", link: "/gallery"}, 
            {name: "Առցանց վճարում", link: "/"}, 
            {name: "Կապ մեզ հետ", link: "/contacts"}
        ],
        info: [
            {name: "Հայաստանի մասին", link: "/about-armenia"},
            {name: "Բժշկական տուրիզմ", link: "/medical-tourism"},
            {name: "Գլխավոր", link: "/"},
            {name: "Պացիենտի համար", link: "/for-patient"},
            {name: "Բժշկի համար", link: "/for-doctor"},
            {name: "ՀՏՀ", link: "/faq"}
        ],
        img: [
            "about-us",
            "our-team",
            "doctors",
            "service",
            "news",
            "gallery",
            "contacts",
            "about-armenia",
            "medical-tourism",
            "for-patient",
            "for-doctor",
            "faq",
            "foreigners"
        ]
    }

    render() {

        const list = this.state.menulist
        const topList = this.state.info
        const imglist = this.state.img


        
        return (
            <div>
                {
                    imglist.map((elem) => {
                       return window.location.href.includes(elem) ? <img src={`./top/${elem}.jpg`} className="topimg" /> : ""
                    })
                }
                {console.log(window.location.pathname)}
                <nav className="firstN">
                    <a className="logo" href={"/"}><img className="logos" src="logo.png" /></a>
                    <p className="upers">Նաիրի<br/>բժշկական կենտրոն</p>
                    {/* <button type="button" className="but">
                        <span ><i></i></span>
                    </button>*/}
                    <div className="abouts">
                        {topList.map((elem) => {
                            return (
                                <First text={elem.name} link={elem.link}/>
                            )
                        })} 
                    </div>
                    {/* <select className="lenguages">
                        <option id="Հայերեն" value="Հայերեն">Հայերեն</option>
                        <option id="English" value="English">English</option>
                        <option id="Русский" value="Русский">Русский</option>
                    </select> */}
                    <select className="lenguages">
                        <option id="Հայերեն" value="Հայերեն">Հայերեն</option>
                        <option id="English" value="English">English</option>
                        <option id="Русский" value="Русский">Русский</option>
                    </select>
                </nav>
    
                <nav className="secondN">
                    <ul className="menu">  
                        {list.map((elem) => {
                            return (
                                <First text={elem.name} link={elem.link} size={'uper'}/>
                            )
                        })}    
                        
                        {/* <div className={"navbar-nav ml-auto top-search"}>
                                                    
                            <script async src="https://cse.google.com/cse.js?cx=feda8b88782d432db"></script>
                                                    
                            <div className={"gcse-searchbox-only"} enableOrderBy="true" autoSearchOnLoad="true" data-lr="lang_hy"></div>
                        </div> */}
                    </ul>
                    <form className="searchTop" method="" action="">
                        <input placeholder="enhanced by google" className="inpTop" />
                        <button type="submit" className="searchbut">
                            <img className="search" src="search.png" />
                        </button>
                    </form>                       
                </nav>
            </div>
        
            // <div>
            //     <a className="logo" href="https://www.w3schools.com/tags/tag_img.asp"><img className="topHeader" src="logo.png"/></a>
            //     <h5>Նաիրի<br/>բժշկական կենտրոն</h5>
    
            // </div>
            
            
                
    
    
        )
    }
    
}
export default Top