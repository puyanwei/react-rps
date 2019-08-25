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
                You dare battle me at
                <br />
                Rock Paper Scissors?
                <br />
                You got no chance, kid!
            </h1>
            <p>What's your name, ya chancer?</p>
            <input type="text" />
            <button onClick={handleClick}>Start</button>
        </div>
    );
};
export default withRouter(Home);
