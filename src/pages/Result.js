import React, { useState, useEffect } from 'react';

const Result = (props) => {
	const { playerName, playerChoice, computerChoice } = props.location.state;
	const [outcome, setOutcome] = useState(null);

	useEffect(() => {
		getOutcome();
	}, []);

	const getOutcome = () => {
		const combinations = [
			'Rock Scissors',
			'Scissors Paper',
			'Paper Rock',
			'Rock Paper',
			'Paper Scissors',
			'Scissors Rock'
		];

		let hashIndexMatcher;

		hashIndexMatcher = combinations.indexOf(`${playerChoice} ${computerChoice}`);

		if (hashIndexMatcher === -1) {
			setOutcome('DRAW');
		} else if (hashIndexMatcher > -1 && hashIndexMatcher < 3) {
			setOutcome('WIN');
		} else {
			setOutcome('LOSE');
		}
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
