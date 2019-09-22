import React, {  useContext } from "react";
import { NameContext } from "../contexts/NameContext";
import { ChoiceContext } from "../contexts/ChoiceContext";

import "./start.css";

const Start = props => {

    const { playerName } = useContext(NameContext);
    const { choice, setChoice } = useContext(ChoiceContext);

    const setEmojiToTextState = emoji => {
        if (emoji === "✊") {
            setChoice({ player: "Rock", computer: null });
        }
        if (emoji === "✋") {
            setChoice({ player: "Paper", computer: null });
        }
        if (emoji === "✌") {
            setChoice({ player: "Scissors", computer: null });
        }
        return;
    };

    const generateComputerChoice = () => {
        const outcomes = ["Rock", "Paper", "Scissors"];
        return outcomes[Math.floor(Math.random() * outcomes.length)];
    };

    const handleClick = () => {
        setChoice({player: choice.player, computer: generateComputerChoice()})
        props.history.push({
            pathname: "/result",
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

            {choice.player !== null ? (
                <>
                    <h3>You chose {choice.player}.</h3>
                    <button onClick={() => handleClick()}>Confirm</button>
                </>
            ) : null}
        </div>
    );
};

export default Start;
