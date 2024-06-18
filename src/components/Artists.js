import React from 'react';
import '../css/Artists.css';
import artitsImage from "../assets/images/artistsImage.jpg"

class Artists extends React.Component {
    render() {
        return (
            <div className="display-games">
            <img  src={artitsImage} alt="Artists" />
                <h1>Artists</h1> 
            </div>
        )
    }
}

export default Artists; 