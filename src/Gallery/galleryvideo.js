import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import videos from "./galleryvideos.json"

class GalleryImgs extends Component {


    render () {
        // var start
        // const newgallery = new Array
        // for (var i = 0; i < galleryPics.length; i++) {
        //     newgallery[i] = galleryPics.splice(0, 4)
        // }
        // if (galleryPics.length%4 == 0) {
        //     start = galleryPics.length - 4
        // } else {
        //     start = galleryPics.length - (galleryPics.length%4)
        // }
        // var last = galleryPics.slice(start, galleryPics.length)

        // newgallery.push(last)
        // console.log(newgallery)
        return (
            <div className="bgc galleryboth">
                <a href="/" className="ttl">Գլխավոր</a>
                <p className="ttl nocolor">/</p>
                <a href="/gallery" className="ttl"> Տեսադարան</a>
                <p>/ Տեսագրություններ</p>
                <p className="ttls">Տեսագրություններ</p>
                
                {
                    videos.map((elem) => {
                        return <div className="doublegallerypics" style={{background: `url(${elem.image})`,  backgroundRepeat: "no-repeat", backgroundSize: "100% 80%"}}>
                                <div className="doublegalleryImgLinkdiv">
                                    <Link to={elem.link} className="doublegalleryImgLink">{elem.name}</Link>
                                </div>
                            </div>
                    })
                }
               
            </div>
        )
    
    }
}
export default GalleryImgs