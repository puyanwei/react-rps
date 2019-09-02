import React, { useRef } from 'react';

import './home.css';

const Home = (props) => {
	const playerName = useRef();

	const handleClick = () => {
		if (!isStringEmpty(playerName.current.value)) {
			props.history.push({ pathname: '/start', state: { playerName: playerName.current.value } });
		}
	};

	const handleKeyPress = (e) => {
		if (!isStringEmpty(playerName.current.value) && e.which === 13) {
			props.history.push({ pathname: '/start', state: { playerName: playerName.current.value } });
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
			<input type="text" onKeyPress={(e) => handleKeyPress(e)} ref={playerName} />
			<button onClick={handleClick}>Start</button>
		</div>
	);
};

export default Home;
