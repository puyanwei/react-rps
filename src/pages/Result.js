import React, { useState, useEffect } from 'react';
import './result.css';

const Result = (props) => {
	const { playerName, playerChoice, computerChoice, scores } = props.location.state;

	const [ currentScores, setCurrentScores ] = useState({ player: 0, computer: 0 });
	const [ result, setResult ] = useState(null);

	useEffect(
		() => {
			getResult(playerChoice, computerChoice);
		},
		[ playerChoice, computerChoice ]
	);

	const getResult = (firstChoice, secondChoice) => {
		const combinations = [
			'Rock Scissors',
			'Scissors Paper',
			'Paper Rock',
			'Rock Paper',
			'Paper Scissors',
			'Scissors Rock'
		];

		let hashIndexMatcher;

		hashIndexMatcher = combinations.indexOf(`${firstChoice} ${secondChoice}`);

		if (hashIndexMatcher === -1) {
			setResult('DRAW');
		} else if (hashIndexMatcher > -1 && hashIndexMatcher < 3) {
			setResult('WIN');
			setCurrentScores({ ...currentScores, player: currentScores.player + 1 });
		} else {
			setResult('LOSE');
			setCurrentScores({ ...currentScores, computer: currentScores.computer + 1 });
		}
	};

	const handleClick = () => {
		props.history.push({
			pathname: '/start',
			state: {
				currentScores
			}
		});
	};

	return (
		<div className="app-container">
			<div className="outcome">
				<strong>YOU {result}</strong>
			</div>
			<br />
			<div>
				<strong>{playerName}</strong> chose <strong>{playerChoice}</strong>
			</div>
			<br />
			<div>
				<strong>Computer</strong> chose <strong>{computerChoice}</strong>
			</div>
			<div>
				<br />
				{`${currentScores.player}-${currentScores.computer}`}
			</div>
			<br />
			<button onClick={handleClick}>Play again?</button>
		</div>
	);
};

export default Result;
