import React, { Component } from 'react';
import docsInfo from "../docs/docsInfo.json"
import Doccomp from "../docs/doccomp/doccomp"
import "./opinion.css"
import sickness from "../data/sickness.json"
class Secondopinion extends Component {
    showen = 0

    render() {
        const onChange =(e) => {
            document.getElementById(docsInfo[e.target.value].link).classList.add("opinionshow");
            if (this.showen != 0) {
                document.getElementById(this.showen).classList.remove("opinionshow")
            }
            this.showen = docsInfo[e.target.value].link

        }
        return (
            <div className="bgc">
                <a href="/" className="ttl">Գլխավոր</a>
                <p className="ttl1">/ Երկրորդ կարծիք</p>
                <p className="ttls">Երկրորդ կարծիք</p>

                <div className="opinionrow">
                    <div className="opinionrowleft">
                        <p className="opinionrowlefttitle">Ինչու՞ դիմել մեզ</p>
                        <p className="opinionrowlefttext">Ստեղծված են բոլոր հարմարավետ պայմանները` լուծելու պացիենտի ցանկացած խնդիր...</p>
                    </div>
                    <div className="opinionrowrigth">
                        <select placeholder="Որոնել բժիշկ" className="searchprof opinionsearch" onChange = {onChange}>
                            <option>Որոնել բժիշկ</option>
                            {
                                docsInfo.map((elem, key) => {
                                    return <option value={key} className="searchprofelem">{elem.name}</option>
                                })
                            }
                        </select>
                        {
                            docsInfo.map((elem, key) => {
                                return <div id={elem.link} className="opinionhide">
                                            <div className="opinondivclick" onClick="">
                                                <img src="./patientStory/opnion.png" className="opinionimg" />
                                                Երկրորդ կարծիք
                                            </div>
                                            <Doccomp data={elem} space="opinion" />
                                        </div>                                        
                            })
                        }
                        <div id="sendoinon" className="fillin">
                            <div>
                                <p className="secondopiniontitle">Երկրորդ կարծիք</p>
                                <p className="secondopiniontext">(վճարովի ծառայություն)</p>
                                <span>
                                    <i class="fas fa-times gray notabs"></i>
                                </span>
                            </div>

                            <form className="secondopinionform">
                                <select className="searchprof allrow">
                                    <option value="Ընտրել">Ընտրել ծառայություն</option>
                                    {
                                        sickness.map((elem) => {
                                            return <option value={elem} className="searchprofelem">{elem}</option>
                                        })
                                    }
                                </select>
                                <input placeholder="Անուն ազգանուն" />
                                <input placeholder="Հեռ։" />
                                <input placeholder="Էլ. հասցե" />
                                <textarea />
                                <a href="#">Իմանալ ավելին, երկրորդ կարծիք <i class="fas fa-caret-right"></i></a>
                                <button type="submit">Ուղարկել</button>
                            </form>

                        </div>
                    </div>
                </div>
                <center className="opinioncenter">
                    <p className="opinioncentertitle">Ինչպես ստանալ երկրորդ կարծիք մեր մասնագետներից</p>
                    <p className="opinioncentertext">Մեր անվտանգ պլատֆորմի շնորհիվ պացիենտները կարող են ստանալ մանրամասն բժշկական տեղեկատվություն, դիտել բժշկական գրառումները և ախտորոշիչ թեստերի արդյունքները մեր փաստաբաններից մեկի օգնությամբ՝ նրա հետ կապնվելով ուղիղ տեսալսակապի միջոցով: Ձեր փաստաբանը կհավաքի Ձեր բժշկական փաստաթղթերը և խորհրդատվության համար սերտորեն կհամագործակցի համապատասխան փորձագետի հետ: Փորձագետը Ձեր ախտորոշման և բուժման հետ կապված երկրորդ կարծիք կներկայացնի: Դուք բժշկի հետ կքննարկեք Ձեր վիճակը իրական ժամանակում, այդ պատճառով խոսակցության ընթացքում կարող եք նրան տալ ցանկացած լրացուցիչ հարց: Փորձագետը Ձեր ախտորոշման և բուժման հետ կապված երկրորդ կարծիք կներկայացնի: Դուք բժշկի հետ կքննարկեք Ձեր վիճակը իրական ժամանակում, այդ պատճառով խոսակցության ընթացքում կարող եք նրան տալ ցանկացած լրացուցիչ հարց: Մեր կլինիկայի մասնագետը անմիջապես Ձեզ հետ կկապնվի՝ բուժման տարբերակները քննարկելու համար: Մենք վճարումները ընդունում ենք կրեդիտային քարտով կամ չեկով կամ բանկային փոխանցմամբ: Մենք վճարումները ընդունում ենք կրեդիտային քարտով կամ չեկով կամ բանկային փոխանցմամբ:</p>
                </center>

            </div>

        )

    }

}
export default Secondopinion