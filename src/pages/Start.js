import React, { useContext } from "react";
import { RPSContext } from "../contexts/RPSContext";

import "./start.css";

const Start = props => {

    const { state, dispatch } = useContext(RPSContext);

    const setEmojiToTextState = emoji => {
        if (emoji === "✊") {
            dispatch({ type: 'SET_PLAYER_CHOICE', payload: "Rock" });
        }
        if (emoji === "✋") {
            dispatch({ type: 'SET_PLAYER_CHOICE', payload: "Paper" });
        }
        if (emoji === "✌") {
            dispatch({ type: 'SET_PLAYER_CHOICE', payload: "Scissors" });
        }
        return;
    };

    const generateComputerChoice = () => {
        const outcomes = ["Rock", "Paper", "Scissors"];
        return outcomes[Math.floor(Math.random() * outcomes.length)];
    };

    const handleClick = () => {
        dispatch({ type: 'SET_COMPUTER_CHOICE', payload: generateComputerChoice() });

        // props.history.push({
        //     pathname: "/result",
        // });
    };

    return (
        <div className="app-container">
            <h2>
                Ok, <span className="player-name">{state.playerName}</span> lets see
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

            {state.choice.player !== null ? (
                <>
                    <h3>You chose {state.choice.player}.</h3>
                    <button onClick={() => handleClick()}>Confirm</button>
                </>
            ) : null}
        </div>
    );
};

export default Start;