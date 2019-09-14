import React, { useState } from "react";
import "./start.css";

const Start = props => {
    const { playerName } = props.location.state;

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
        props.history.push({
            pathname: "/result",
            state: {
                playerChoice: choice,
                playerName: playerName,
                computerChoice: generateComputerChoice(),
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
