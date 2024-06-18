import React from "react";
import '../css/Collection.css';
import allsong from "../assets/images/allsong.jpg"

class AllSongs extends React.Component {
    render () {
        return (
            <div className="display-games">
                 <img  src={allsong} alt="All Songs " />
                <h1>All Songs</h1>
            </div>
        )
    }

}

export default AllSongs; 