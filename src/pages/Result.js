import React, { useState, useEffect } from 'react';

const Result = (props) => {
	const { playerName, playerChoice } = props.location.state;
	const [computerChoice, setComputerChoice] = useState(null);

	useEffect(() => {
		setComputerChoice(generateComputerChoice);
	}, []);

	const getResult = () => {
		// code that runs after the setting of the playerName and playerChoice. Will return "Win", "Lose", or "Draw"
		const outcomes = ['WIN', 'LOSE', 'DRAW'];
		return outcomes[Math.floor(Math.random() * outcomes.length)];
	};

	const generateComputerChoice = () => {
		const outcomes = ['Rock', 'Paper', 'Scissors'];
		return outcomes[Math.floor(Math.random() * outcomes.length)];
	};

	const outcome = getResult();

	return (
		<div className="app-container">
			{outcome ? (
				<>
					<strong>YOU {outcome}</strong>
					<br />
					<strong>{playerName}</strong> chose <strong>{playerChoice}</strong>
					<br />
					<strong>Computer</strong> chose <strong>{computerChoice}</strong>
				</>
			) : (
				<>Loading...</>
			)}
		</div>
	);
};

export default Result;
