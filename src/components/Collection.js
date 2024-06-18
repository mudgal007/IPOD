import React from "react";
import '../css/Collection.css';
import collectionImage from "../assets/images/galleryImage.jpg"

class Collection extends React.Component {
    render () {
        return (
            <div className="display-games">
                 <img  src={collectionImage} alt="Collection" />
                <h1>Collection</h1>
            </div>
        )
    }
}

export default Collection;