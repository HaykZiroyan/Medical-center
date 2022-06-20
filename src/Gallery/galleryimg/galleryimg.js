import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import galleryPics from "../gallery-pics.json"
import Doublesub from "./doublesub/doublesub"
// const galleryPicsnews = []
import Subgallery from "../subgallery/subgallery"
import { render } from 'react-dom';

class GalleryImgs extends Component {


    render () {
        var start
        const newgallery = new Array
        for (var i = 0; i < galleryPics.length; i++) {
            newgallery[i] = galleryPics.splice(0, 4)
        }
        if (galleryPics.length%4 == 0) {
            start = galleryPics.length - 4
        } else {
            start = galleryPics.length - (galleryPics.length%4)
        }
        var last = galleryPics.slice(start, galleryPics.length)

        newgallery.push(last)
        console.log(newgallery)
        return (
            <div className="bgc galleryboth">
                <a href="/" className="ttl">Գլխավոր</a>
                <p className="ttl nocolor">/</p>
                <a href="/gallery" className="ttl"> Տեսադարան</a>
                <p>/ Լուսանկարներ</p>
                <p className="ttls">Լուսանկարներ </p>
                
                {
                    newgallery.map((elem) => {
                        return <div className="galleryrows">
                                    {elem.map((elements) => {
                                        return <Doublesub data={elements} />
                                    })}
                                </div>
                    })
                }

            </div>
        )
    
    }
}
export default GalleryImgs