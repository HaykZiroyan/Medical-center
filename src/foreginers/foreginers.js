import React, { Component } from 'react';
import foreginslide from "./foreginers.json"
import "./foreginers.css"

class Foreginers extends Component {
    a = 100
    forginid = "first"
    render() {
        const getids = (id) => {
                document.getElementById(id).classList.add("shows")
                document.getElementById(this.a).classList.remove("shows")
                this.a = id
        }
        const foregincontid = (id) => {
            this.forginid = id
    }
        return (
            <div className="bgc">
                <a href="/" className="ttl">Գլխավոր</a>
                <p className="ttl1">/ Եթե Հայաստանում չեք</p>
                <p className="ttls">Եթե Հայաստանում չեք</p>

                {foreginslide.map((elem, key) => {
                    return <div  id={key + 100} className={key + 100 === this.a ? "foreginslide shows" : "foreginslide"} style={{ backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", backgroundImage: `url(${(elem.image)})`}} >
                            <div className="slidediv">
                                <p className="foregintitle" >{elem.title}</p>
                                {
                                    elem.texts.map((elems) => {
                                        return elems.hasOwnProperty("link") ? <a href={elems.link} className="inlinebreack">{elems.text}</a> : <p className="inlinebreack">{elems.text}</p>
                                    })
                                }
                            </div>
                        </div>
                })}
                <ul className="ulCenter">
                    {foreginslide.map((elem, key) => {
                        return (
                            <li id={key + 1000} onClick={() => {getids(key + 100)}} className={key + 100 === this.a ? "borders lis foreginli" : "borders foreginli"}></li>
                        )
                    })}
                </ul>
                
                <div className="foregincontainer">
                    <div className="forginleft">
                        <div id="first" className={this.forginid == "first" ? "shows" : ""}>
                            <p>Օտարերկրա պետություններում ՀՀ դիվանագիտական ներկայացուցչությունները եւ հյուպատոսական հիմնարկներն իրավասու են նոտարական կարգով վավերացնել ՀՀ-ում օգտագործման համար նախատեսված փաստաթղթերը: Կարող են օրինականացնել նաև օտարերկրյա պետություններում օգտագործելու համար նախատեսված այն փաստաթղթերը, որոնք առնչվում են ՀՀ քաղաքացիների հետ, ինչպես նաև օտարերկրյա քաղաքացիներին պատկանող այն փաստաթղթերը կամ դրանց պատճենները, որոնք վերաբերում են ՀՀ-ում նրանց գործունեությանն ու կեցությանը:</p>
                            <i>Դիվանագիտական ներկայացուցչությունները և հյուպատոսական հիմնարկները կատարում են հետեւյալ նոտարական գործողությունները.</i>
                            <ul>
                                <li>վավերացնում են գործարքներ, պայմանագրեր, լիազորագրեր, համաձայնագրեր,</li>
                                <li>միջոցներ են ձեռնարկում ժառանգական գույքի պահպանության համար,</li>
                                <li>վավերացնում են փաստաթղթերի պատճենների (լուսապատճենների) և դրանց քաղվածքների ճշտությունը,</li>
                                <li>վավերացնում են փաստաթղթերի վրա եղած ստորագրությունների իսկությունը,</li>
                                <li>վավերացնում են փաստաթղթի՝ մեկ լեզվից մեկ այլ լեզվի թարգմանության ճշտությունը,</li>
                                <li>հաստատում են քաղաքացու ողջ լինելու, որոշակի վայրում գտնվելու փաստը,</li>
                                <li>հաստատում են լուսանկարված պատկերված անձի և քաղաքացու նույնությունը,</li>
                                <li>հաստատում են փաստաթղթեր ներկայացնելու ժամանակը,</li>
                                <li>ի պահ են ընդունում փաստաթղթեր:</li>
                            </ul>
                            <p>Ծանոթություն</p>
                            <p>Նոտարական գործողությունների կատարման սակագներին կարող եք ծանոթանալ այստեղ:Նոտարական գործողությունների կատարման կարգի վերաբերյալ հավելյալ տեղեկություններ ստանալու նպատակով կարող եք կապվել Հայաստանի Հանրապետության մոտակա դիվանագիտական ներկայացուցչության կամ հյուպատոսական հիմնարկի (ցանկը տեսնելու համար սեղմել այստեղ) հետ:</p>
                        </div>
                        <div id="second" className={this.forginid == "second" ? "shows" : ""}>
                            <img src="./foreginers/img.png" className="secondimg" />
                        </div>
                    </div>
                    <div className="forginrigth">
                        <div onClick={() => {foregincontid("first")}}>Նոտարական ծառայություններ` արտերկրում</div>
                        <div onClick={() => {foregincontid("second")}}>ՀՀ քաղաքացիություն ստանալու գործընթացը</div>
                    </div>
                </div>
            </div>

        )

    }

}
export default Foreginers