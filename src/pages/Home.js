import React, { useRef } from 'react';

import './home.css';

const Home = (props) => {
	const playerName = useRef();

	const handleClick = () => {
		if (playerName) {
			props.history.push({ pathname: '/start', state: { playerName: playerName.current.value } });
		}
	};

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
			<input type="text" ref={playerName} />
			<button onClick={handleClick}>Start</button>
		</div>
	);
};

Home.displayName = 'Home';
export default Home;
