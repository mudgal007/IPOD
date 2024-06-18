import React from "react";
import '../css/Gallery.css';
import galleryImage from "../assets/images/galleryImage.jpg"

class Gallery extends React.Component {
    render () {
        return (
            <div className="display-gallery">
                <img  src={galleryImage} alt="all" />
                <h1>Gallery</h1>
            </div>
        )
    }
}
export default Gallery;