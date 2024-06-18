import React from "react";
import '../css/Collection.css';
import PhotosImage from "../assets/images/galleryImage.jpg"

class Photos extends React.Component {
    render () {
        return (
            <div className="display-games">
                 <img  src={PhotosImage} alt="individual" />
                <h1>Photos</h1>
            </div>
        )
    }


}

export default Photos;