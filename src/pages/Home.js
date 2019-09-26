import React, { useRef, useContext } from 'react';
import { RPSContext } from '../contexts/RPSContext';
import './home.css';

const Home = (props) => {
	const { state, dispatch } = useContext(RPSContext);
	const playerNameEntry = useRef();

	const handleClick = () => {
		if (!isStringEmpty(playerNameEntry.current.value)) {
			dispatch({ type: 'SET_NAME', state: playerNameEntry.current.value });
			props.history.push({
				pathname: '/start'
			});
			console.log(dispatch);
		}
	};

	const handleKeyPress = (e) => {
		if (!isStringEmpty(playerNameEntry.current.value) && e.which === 13) {
			console.log({ props });
			// dispatch({ type: 'SET_NAME', state: playerNameEntry.current.value });
			// props.history.push({
			// 	pathname: '/start'
			// });
		}
	};

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
			<input type="text" onKeyPress={(e) => handleKeyPress(e)} ref={playerNameEntry} />
			<button onClick={handleClick}>Start</button>
		</div>
	);
};

export default Home;
