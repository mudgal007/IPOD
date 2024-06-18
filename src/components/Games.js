import React from "react";
import '../css/Games.css';
import gameImage from "../assets/images/gamesImage.jpg"

class Games extends React.Component {
    componentDidMount() {
        this.props.currentlyScreen();
    }
    componentWillUnmount() {
        this.props.currentlyScreen();
    }
    render () {
        return (
            <div className="display-games">
            <img  src={gameImage} alt="Game " />
                <h1>Games</h1> 
            </div>
        )
    }
}

export default Games;