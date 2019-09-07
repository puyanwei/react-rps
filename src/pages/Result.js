import React from 'react';

const Result = (props) => {
	return (
		<div>
			{props.location.state.playerName} chose {props.location.state.playerChoice}
		</div>
	);
};

export default Result;
