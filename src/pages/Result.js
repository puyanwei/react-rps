import React, { useState, useEffect } from "react";
import "./result.css";

const Result = props => {
    const { playerName, playerChoice, computerChoice } = props.location.state;

    const [outcome, setOutcome] = useState(null);
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [count, setCount] = useState(0);

    const getOutcome = () => {
        console.log("finding result");
        const combinations = [
            "Rock Scissors",
            "Scissors Paper",
            "Paper Rock",
            "Rock Paper",
            "Paper Scissors",
            "Scissors Rock"
        ];

        let hashIndexMatcher;

        hashIndexMatcher = combinations.indexOf(
            `${playerChoice} ${computerChoice}`
        );

        if (hashIndexMatcher === -1) {
            console.log("its a draw");
            setOutcome("DRAW");
        } else if (hashIndexMatcher > -1 && hashIndexMatcher < 3) {
            setPlayerScore(playerScore + 1);
            setOutcome("WIN");
            console.log("its a win", playerScore);
        } else {
            setComputerScore(computerScore + 1);
            setOutcome("LOSE");
            console.log("its a loss", computerScore);
        }
    };

    const handleClick = () => {
        props.history.push({
            pathname: "/start",
            state: {
                playerName: playerName
            }
        });
        postLocalStorage();
    };

    const loadLocalStorageToState = () => {
        console.log("attempting to load localstorage");
        const loadedPlayerScore = localStorage.getItem("playerScore");
        const loadedComputerScore = localStorage.getItem("computerScore");
        if (loadedPlayerScore !== null || loadedComputerScore !== null) {
            console.log(`loading localstorage`);
            setPlayerScore(parseInt(loadedPlayerScore));
            setComputerScore(parseInt(loadedComputerScore));
        }
    };
    console.log("playerScore", playerScore);
    console.log("computerScore", computerScore);

    const postLocalStorage = () => {
        localStorage.setItem("playerScore", playerScore);
        localStorage.setItem("computerScore", computerScore);
    };

    useEffect(() => {
        loadLocalStorageToState();
    }, []);

    useEffect(() => {
        getOutcome();
    }, []);

    return (
        <div className="app-container">
            <div className="outcome">
                <strong>YOU {outcome}</strong>
            </div>
            <br />
            <div>
                <strong>{playerName}</strong> chose{" "}
                <strong>{playerChoice}</strong>
            </div>
            <br />
            <div>
                <strong>Computer</strong> chose{" "}
                <strong>{computerChoice}</strong>
            </div>
            <div>
                {playerName} vs Computer
                <br />
                {`${playerScore}-${computerScore}`}
            </div>
            <br />
            <button onClick={handleClick}>Play again?</button>
            <button onClick={() => setCount(count + 1)}>Test</button>
        </div>
    );
};

export default Result;
