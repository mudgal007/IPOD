import React from "react";
import '../css/Setting.css';
import settingImage from "../assets/images/settingImage.jpg"

class Setting extends React.Component {
    render () {
        return (
            <div className="display-setting">
                 <img  src={settingImage} alt="Setting" />
                <h1>Setting</h1>
            </div>
        )
    }
}

export default Setting;