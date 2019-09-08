import React, { useState, useEffect } from 'react';

const Result = (props) => {
	const { playerName, playerChoice, computerChoice } = props.location.state;
	const [outcome, setOutcome] = useState(null);

	useEffect(() => {
		getResult();
	}, []);

	const getResult = () => {
		// code that runs after the setting of the playerName and playerChoice. Will return "Win", "Lose", or "Draw"
		if (playerChoice === computerChoice) {
			setOutcome('DRAW');
		}
		console.log(playerChoice, computerChoice);
	};

	return (
		<div className="app-container">
			<strong>YOU {outcome}</strong>
			<br />
			<strong>{playerName}</strong> chose <strong>{playerChoice}</strong>
			<br />
			<strong>Computer</strong> chose <strong>{computerChoice}</strong>
		</div>
	);
};

export default Result;
