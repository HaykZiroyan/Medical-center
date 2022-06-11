import React from 'react';
import images from "./imageslide.json"
import "./slideImages.css"

function SlideImages() {
    var a = 100
    const getids = (id) => {
            document.getElementById(id).classList.add("showen")
            document.getElementById(a).classList.remove("showen")
            document.getElementById(id + 900).classList.add("lis")
            document.getElementById(a + 900).classList.remove("lis")
            a = id
    }      
    return (
        <div>
                
        {images.map((elem, key) => {
            return (
                <img src={elem} id={key + 100} alt="" className={key + 100 === a ? "slidesimage showen" : "slidesimage"} />
            )
        })}
        <ul className="ulCenter">
            {images.map((elem, key) => {
                return (
                    <li id={key + 1000} onClick={() => {getids(key + 100)}} className={key + 100 === a ? "borders lis" : "borders"}></li>
                )
            })}
        </ul>
    </div>
    );
}
export default SlideImages