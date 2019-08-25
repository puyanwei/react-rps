import React from "react";
import "./home.css";

const Home = () => {
    return (
        <div className="app-container">
            <h1>
                Welcome to the Battle of<br></br> Rock Paper Scissors!
            </h1>
            <p>Please enter your name</p>
            <input type="text" />
            <button>Start</button>
        </div>
    );
};

export default Home;
