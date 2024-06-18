import React from 'react';
import '../css/Buttons.css';

const Buttons = (props) => {
    return (
        <div className="buttons-container">
            <button className="buttons-center"
                onClick={props.selectButtonClicked}>
                <h2>Select</h2>
            </button>
            <button className="button-menu"
                onClick={props.menuButtonClicked}>
                <i className="fas fa-bars"></i>
            </button>
            
        </div>
    );
}

export default Buttons; 