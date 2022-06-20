import React, { Component } from 'react';
import "./getus.css"
class Getus extends Component {
    
    render() {

        return (
            <div className="bgc">
                <a href="/" className="ttl">Գլխավոր</a>
                <p className="ttl1">/ Ինչպե՞ս հասնել «Նաիրի» ԲԿ</p>
                <p className="ttls">Ինչպե՞ս հասնել «Նաիրի» ԲԿ</p>
                <center className="services">
                    <p className="servicetitle">Եթե որոշել եք բուժվել «Նաիրի» ԲԿ-ում, ցանկացած հարցում պատրաստ ենք օգնել Ձեզ</p>
                    <p className="servicetext">Եթե մեր օժանդակության կարիքն ունեք, կարող եք կապվել մեր աշխատակցի հետ և կեցության հետ կապված բոլոր հարցերը կկարգավորի` առաջարկելով Ձեր նախընտրած տաբերակներով կեցության վայր գտնել: Ձեր ցանկությամբ կարող եք նախապես տոմսեր պատվիրել` կապվելով մեր աշխատակցի հետ: Եթե արդեն գնել եք տոմսերը, կարող ենք կազմակերպել տրանսֆերը` Հայաստանում և տրամադրել թարգմանիչ` նախապես պայմանավորվածության համաձայն:</p>
                </center>
                <center className="getusbk">«Նաիրի» ԲԿ աշխատանքային ժամերը. շուրջօրյա</center>
                <div className="getus">
                    <div>
                        <p className="getustitle">Ինչպե՞ս օդանավակայանից հասնել «Նաիրի» ԲԿ</p>
                        <p className="getustext">Եթե Դուք արդեն Երևանի Զվարթնոց օդանավակայանում եք, կամ գտնվում եք Երևանի Հանրապետության հրապարակում, Նաիրի ԲԿ հասնելու մի քանի տարբերակներ կան.</p>
                        <p className="getustext"><strong>Տաքսի</strong></p>
                        <p className="getustext">Օդանավակայանում տաքսի ծառայությունից օգտվելու համար կարող եք ներբեռնել Yandex կամ GG տաքսի ծառայությունների բջջային հավելվածները և տաքսի պատվիրել, կամ օգտվել օդանավակայնում գործող տաքսի ծառայությունից: Այն կարող է արժենալ մոտավորապես 2.500 ՀՀ դրամ:</p>
                    </div>
                    <div>
                        <iframe className="maps" id="gmap_canvas" src="https://maps.google.com/maps?q=Nairi%20Medical%20Center&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div>

            </div>

        )

    }

}
export default Getus