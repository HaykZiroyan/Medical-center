import React, { Component } from 'react';
import "./contacts.css";

class Contacts extends Component {

    render() {

        return (
            <div className="bgc">
                <a href="/" className="ttl">Գլխավոր</a>
                <p className="ttl1">/ Կապ մեզ հետ</p>
                <p className="ttls">Կապ մեզ հետ</p>
                <center className="howcontact">Հասցե. Պարոնյան փող., 21 շենք, Երևան, 0015, Հայաստան <br />
                    Ընդունարան. +374 10 53 75 00, 8 999 <br />
                    Ամբուլատոր ծառայություն. +374 10 54 60 00, +374 8 900 <br />
                    Էլ. հասցե. hospital@nairimed.am 
                </center>
                <iframe className="maps" id="gmap_canvas" src="https://maps.google.com/maps?q=Nairi%20Medical%20Center&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>

        )

    }

}
export default Contacts