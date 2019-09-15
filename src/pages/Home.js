import React, { useRef, useContext } from "react";
import { NameContext } from "../contexts/NameContext";
import "./home.css";

const Home = props => {
    const playerName = useRef();

    const { setPlayerName } = useContext(NameContext);

    const handleClick = () => {
        if (!isStringEmpty(playerName.current.value)) {
            setPlayerName(playerName.current.value);
            props.history.push({
                pathname: "/start"
            });
        }
    };

    const handleKeyPress = e => {
        if (!isStringEmpty(playerName.current.value) && e.which === 13) {
            setPlayerName(playerName.current.value);
            props.history.push({
                pathname: "/start"
            });
        }
    };

    const isStringEmpty = string => string.trim().length === 0;

    return (
        <div className="app-container">
            <h1>
                You dare battle me at
                <br />
                Rock, Paper, Scissors?
                <br />
                You got no chance, kid!
            </h1>
            <p>What's your name, ya chancer?</p>
            <input
                type="text"
                onKeyPress={e => handleKeyPress(e)}
                ref={playerName}
            />
            <button onClick={handleClick}>Start</button>
        </div>
    );
};

export default Home;
