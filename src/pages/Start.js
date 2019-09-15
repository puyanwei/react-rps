import React, { useState, useContext } from "react";
import { NameContext } from "../contexts/NameContext";

import "./start.css";

const Start = props => {
    // const { scores } = props.location.state;

    const { playerName, changeName } = useContext(NameContext);

    const [choice, setChoice] = useState(null);

    const setEmojiToTextState = emoji => {
        if (emoji === "✊") {
            setChoice("Rock");
        }
        if (emoji === "✋") {
            setChoice("Paper");
        }
        if (emoji === "✌") {
            setChoice("Scissors");
        }
        return;
    };

    const generateComputerChoice = () => {
        const outcomes = ["Rock", "Paper", "Scissors"];
        return outcomes[Math.floor(Math.random() * outcomes.length)];
    };

    const handleClick = () => {
        // let scoresCopy = scores;
        let scoresCopy = {};
        if (!scoresCopy) {
            scoresCopy = { player: 0, computer: 0 };
        }

        props.history.push({
            pathname: "/result",
            state: {
                playerName: playerName,
                playerChoice: choice,
                computerChoice: generateComputerChoice(),
                scores: scoresCopy
            }
        });
    };

    return (
        <div className="app-container">
            <h2>
                Ok, <span className="player-name">{playerName}</span> lets see
                whatcha got!
                <br />
                <br />
                choose rock, paper or scissors
            </h2>
            <div className="choice-container">
                <button
                    className="choice-btn"
                    onClick={() => setEmojiToTextState("✊")}
                >
                    ✊
                </button>
                <button
                    className="choice-btn"
                    onClick={() => setEmojiToTextState("✋")}
                >
                    ✋
                </button>
                <button
                    className="choice-btn"
                    onClick={() => setEmojiToTextState("✌")}
                >
                    ✌
                </button>
            </div>

            {choice !== null ? (
                <>
                    <h3>You chose {choice}.</h3>
                    <button onClick={() => handleClick()}>Confirm</button>
                </>
            ) : null}
        </div>
    );
};

export default Start;
