import React, { useState, useEffect, useContext } from 'react';
import { RPSContext } from '../contexts/RPSContext';

import './result.css';

const Result = (props) => {
	const [result, setResult] = useState(null);
	const { state: { playerName, choice: { playerChoice, computerChoice }, scores: { playerScore, computerScore } }, dispatch } = useContext(RPSContext);

	useEffect(() => {

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
				dispatch({ type: 'PLAYER_WINS' })
			} else {
				setResult('LOSE');
				dispatch({ type: 'COMPUTER_WINS' })
			}
		};

		getResult(playerChoice, computerChoice);
	}, [computerChoice, dispatch, playerChoice]);


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
				<strong>{playerName}</strong> chose <strong>{playerChoice}</strong>
			</div>
			<br />
			<div>
				<strong>Computer</strong> chose <strong>{computerChoice}</strong>
			</div>
			<div>
				<br />
				<strong className="large-font">{`${playerScore}-${computerScore}`}</strong>
			</div>
			<br />
			<button onClick={handleClick}>Play again?</button>
		</div>
	);
};

export default Result;
