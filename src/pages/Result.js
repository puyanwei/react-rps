import React, { useState, useEffect, useContext } from 'react';
import { NameContext } from '../contexts/NameContext';
import { ScoreContext } from '../contexts/ScoreContext';
import { ChoiceContext } from '../contexts/ChoiceContext';

import './result.css';

const Result = (props) => {
	const [ result, setResult ] = useState(null);

	const { currentScores, setCurrentScores } = useContext(ScoreContext);
	const { playerName } = useContext(NameContext);
	const { choice } = useContext(ChoiceContext);

	useEffect(() => {
		getResult(choice.player, choice.computer);
	}, []);

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
			pathname: '/start'
		});
	};

	return (
		<div className="app-container">
			<div className="large-font">
				<strong>YOU {result}</strong>
			</div>
			<br />
			<div>
				<strong>{playerName}</strong> chose <strong>{choice.player}</strong>
			</div>
			<br />
			<div>
				<strong>Computer</strong> chose <strong>{choice.computer}</strong>
			</div>
			<div>
				<br />
				<strong className="large-font">{`${currentScores.player}-${currentScores.computer}`}</strong>
			</div>
			<br />
			<button onClick={handleClick}>Play again?</button>
		</div>
	);
};

export default Result;
