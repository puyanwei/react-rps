import React, { useState } from "react";
import "./start.css";

const Start = () => {
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

    return (
        <div className="app-container">
            <h2>
                Ok, [name] lets see whatcha got!
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
                    <button>Confirm</button>
                </>
            ) : null}
        </div>
    );
};

export default Start;
