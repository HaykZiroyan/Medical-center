import React, { Component } from 'react';
import Subgallery from "./subgallery/subgallery"
import "./gallery.css"

class Gallery extends Component {

    render() {

        return (
            <div className="bgc galleryboth">
                <a href="/" className="ttl">Գլխավոր</a>
                <p className="ttl1">/ տեսադարան</p>
                <p className="ttls">Տեսադարան</p>
                <div className="gallery">
                    <Subgallery image="./gallerys/galleryPics.png" text="Լուսանկարներ" links="images" />
                    <Subgallery image="./gallerys/galleryVideo.png" text="Տեսագրություններ" links="videos" />
                </div>
            </div>
        )

    }

}
export default Gallery