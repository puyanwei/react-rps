import React, { useState, useEffect } from "react";
import "./start.css";

const Start = (props) => {
    const [choice, setChoice] = useState(null);
    const [playerName, setPlayerName] = useState('');

    useEffect(() => {
        setPlayerName(props.location.state.playerName)
        
    }, [])

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

    const handleClick = () => {
        props.history.push({ pathname: '/result', state: { playerChoice: choice,playerName: playerName  } });
        
    };

    return (
        <div className="app-container">
            <h2>
                Ok, <span className="player-name">{playerName}</span> lets see whatcha got!
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
