import React from "react";
import { withRouter } from "react-router-dom";

import "./home.css";

const Home = props => {
    const handleClick = () => {
        props.history.push("/start");
    };

    return (
        <div className="app-container">
            <h1>
                Welcome to the Battle of<br></br> Rock Paper Scissors!
            </h1>
            <p>Please enter your name</p>
            <input type="text" />
            <button onClick={handleClick}>Start</button>
        </div>
    );
};
export default withRouter(Home);
