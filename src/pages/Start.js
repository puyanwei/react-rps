import React from "react";
import "./start.css";

const Start = () => {
    return (
        <div className="app-container">
            <h2>
                Ok, [name] lets see whatcha got!
                <br />
                <br />
                choose rock, paper or scissors
            </h2>
            <div className="choice-container">
                <button className="choice-btn">✊</button>
                <button className="choice-btn">✋</button>
                <button className="choice-btn">✌</button>
            </div>
        </div>
    );
};

export default Start;
