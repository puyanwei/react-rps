import React, { useState, useEffect } from 'react';
import './result.css';

const Result = (props) => {
	const { playerName, playerChoice, computerChoice } = props.location.state;
	const [ outcome, setOutcome ] = useState(null);

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

	const handleClick = () => {
		props.history.push({
			pathname: '/start',
			state: { playerName: playerName }
		});
	};

	return (
		<div className="app-container">
			<div className="outcome">
				<strong>YOU {outcome}</strong>
			</div>
			<br />
			<div>
				<strong>{playerName}</strong> chose <strong>{playerChoice}</strong>
			</div>
			<br />
			<div>
				<strong>Computer</strong> chose <strong>{computerChoice}</strong>
			</div>
			<br />
			<button onClick={handleClick}>Play again?</button>
		</div>
	);
};

export default Result;
