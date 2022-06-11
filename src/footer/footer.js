import React, { Component } from 'react';
import Columns from './columns/columns';
import './footer.css';


class Footer extends Component {
    state = {
        column1: [
            {name: "Գլխավոր", link: "news", clname:"col-lg-2" }, 
            {name: "Մեր մասին", link: "about-us"}, 
            {name: "Մեր թիմը", link: "our-team"}, 
            {name: "Բժիշկներ", link: "doctors"},
            {name: "Բոլոր ծառայությունները", link: "service"}, 
            {name: "Գործընկերներ", link: "partners"},
        ],
        column2: [
            {name: "Լուրեր", link: "news", clname:"col-lg-3"},
            {name: "Մասնագիտական հոդվածներ", link: "articles/165"},
            {name: "Հանրամատչելի Հոդվածներ", link: "articles/162"},
            {name: "Կլինիկական դեպքեր", link: "clinical-cases"},
            {name: "Պացիենտների պատմություններ", link: "patient-stories"},
            {name: "Պացիենտի կրթություն", link: "for-patient/education"}
        ],
        column3: [
            {name: "Հայաստանի մասին", link: "about-armenia", clname:"col-lg-2"},
            {name: "Եթե Հայաստանում չեք", link: "foreigners"},
            {name: "Ինչու՞ դիմել մեզ", link: "foreigners"},
            {name: "Ինչպե՞ս հասնել «Նաիրի» ԲԿ", link: "how-to-get-us"},
            {name: "Երկրորդ կարծիք", link: "second-opinion"},
            {name: "ՀՏՀ", link: "faq"},
            {name: "Առցանց վճարում", link: ""}
        ],
        column4: [
            {name: "Պացիենտների համար", link: "for-patient", clname:"col-lg-2"},
            {name: "Բժիշկների համար", link: "for-doctor"},
            {name: "Բժշկական տուրիզմ", link: "medical-tourism"},
            {name: "Տեսադարան", link: "gallery"},
            {name: "Կանոնադրություն", link: "statute"}
        ],
        infos: [
            {name: "Կապ մեզ հետ", link: "https://www.nairimed.com/public/hy/contacts", clname:"col-lg-3"},
            {name: "Պարոնյան փողոց, 21 շենք, Երևան, 0015, Հայաստան", link: "https://www.google.com/maps/place/21+Paronyan+poxoc,+Yerevan+0015,+%D0%90%D1%80%D0%BC%D0%B5%D0%BD%D0%B8%D1%8F/@40.1828887,44.4971988,17.29z/data=!4m13!1m7!3m6!1s0x406abd0116b39b1d:0x2154e77b840de79a!2zMjEgUGFyb255YW4gcG94b2MsIFllcmV2YW4gMDAxNSwg0JDRgNC80LXQvdC40Y8!3b1!8m2!3d40.1827218!4d44.498981!3m4!1s0x406abd0116b39b1d:0x2154e77b840de79a!8m2!3d40.1827218!4d44.498981"},
            {name: "Ընդունարան +374 10 53 75 00, 8 900, 8 999", link: "text"},
            {name: "Ամբուլատոր ծառայություններ +374 10 53 75 00, 8 900, 8 999", link:"text"}
        ]
    }
    render() {
        const info = this.state.infos
        const list1 = this.state.column1
        const list2 = this.state.column2
        const list3 = this.state.column3
        const list4 = this.state.column4
        return (
            <div className="down">
                <center className="downlogs">
                    <div className="logo">
                        <a href="https://www.instagram.com/nairimedicalcenter/"><img className="ig" src="instagram.png" /></a>
                        <a href="https://www.youtube.com/channel/UC9btnRueqQCiXtGnIOW3uNA"><img className="youtube" src="youtube.png" /></a>
                        <a href="https://www.facebook.com/NairiMedicalCenter/"><img className="fb" src="fb.png" /></a>
                    </div>
                    <p className="sometxt">Բաժանորդագրվեք` ստանալու տեղեկատվություն</p>
                    <form className="forms" method="" action="">
                        <input name="" className="inp" placeholder="լրացնել էլ. փոստի հասցե" />
                        <button type="submit" className="signUp">գրանցվել</button>
                    </form>
                </center>
                <div className="row footer">
                    <Columns list={info}/>
                    <Columns list={list1}/>
                    <Columns list={list2}/>
                    <Columns list={list3}/>
                    <Columns list={list4}/>
                    <p>© Նաիրի բժշկական կենտրոն։ Բոլոր իրավունքները պաշտպանված են </p>
                </div>
            </div>

        )

    }

}
export default Footer