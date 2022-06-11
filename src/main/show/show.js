import React from 'react';
import "./show.css"

function Show() {

    return (
        <div>
            <div className="arcanc">
                <img src="./topButtons/first.png"></img>
                Առցանց կապ
            </div>
            <div className="conactnum">
                <a href="tel:+374 10 53 75 00" className="logo">
                    <img src="./socialmedia/number.png" />
                </a>
                <div className="information">
                    <p>Ընդունարան</p>
                    <p>+374 10 53 75 00, 8 900, 8 999</p>  
                </div>
            </div>
            <div className="conactnum">
                <a  href="https://wa.me/+374 91 55 51 56" className="logo">
                    <img src="./socialmedia/whatsap.png" />
                </a>
                <div className="information">
                    <p>Whatsap</p>
                    <p>+374 91 55 51 56</p>  
                </div>
            </div><div className="conactnum">
                <a href="viber://chat?number=%2B374 91 55 51 56" className="logo">
                    <img src="./socialmedia/viber.png" />
                </a>
                <div className="information">
                    <p>Viber</p>
                    <p>+374 91 55 51 56</p>  
                </div>
            </div>
        </div>
    );
}
export default Show