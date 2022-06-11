import React from 'react';
import {Link } from 'react-router-dom';
import galleryPics from "../gallery-pics.json"
const galleryPicsnews = []

function GalleryImgs() {
        
        return (
            <div className="bgc galleryboth">
                <a href="/" className="ttl">Գլխավոր</a>
                <p className="ttl nocolor">/</p>
                <a href="/gallery" className="ttl"> Տեսադարան</a>
                <p>/ Լուսանկարներ</p>
                <p className="ttls">Լուսանկարներ </p>
            {
                galleryPics.map((elem, index) => {
                        if (!galleryPicsnews[Math.floor(index/4)]) { galleryPicsnews.push([]) }
                        if (!galleryPicsnews[Math.floor(index/4)].includes(elem)) {galleryPicsnews[Math.floor(index/4)].push(elem)}
                    }),

                galleryPicsnews.map((elem) => {
                   return <div className="doccopmrow">
                       {elem.map((elems) => {
                            return <div className="picselem">
                                <img src={elems.image}  />
                                <Link to={elems.link} className="">{elems.title}</Link>
                            </div>
                       })}
                   </div>

                            
                })
            }
                
                {console.log(galleryPicsnews)}
            </div>
        )
    

}
export default GalleryImgs