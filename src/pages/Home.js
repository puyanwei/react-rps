import React, { useRef, useContext } from 'react';
import { RPSContext } from '../contexts/RPSContext';
import './home.css';

const Home = (props) => {
    const { dispatch } = useContext(RPSContext);
    const playerNameEntry = useRef();

    const handleClick = () => {
        if (!isStringEmpty(playerNameEntry.current.value)) {
            sendNameToPayloadAndGoToStart()
        }
    };

    const handleKeyPress = (e) => {
        if (!isStringEmpty(playerNameEntry.current.value) && e.which === 13) {
            sendNameToPayloadAndGoToStart()
        }
    };

    const sendNameToPayloadAndGoToStart = () => {
        dispatch({ type: 'SET_NAME', payload: playerNameEntry.current.value });
        props.history.push({
            pathname: '/start'
        });
        return
    }

    const isStringEmpty = (string) => string.trim().length === 0;

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
            <input type="text" ref={playerNameEntry} onKeyPress={handleKeyPress} />
            <button onClick={handleClick}>Start</button>
        </div >
    );
};

export default Home;
