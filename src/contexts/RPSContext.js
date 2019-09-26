import React, { createContext, useState } from 'react';

export const RPSContext = createContext();

const RPSContextProvider = (props) => {
	const [ choice, setChoice ] = useState({ player: null, computer: null });
	const [ playerName, setPlayerName ] = useState('');
	const [ currentScores, setCurrentScores ] = useState({ player: 0, computer: 0 });

	return (
		<RPSContext.Provider value={{ choice, setChoice, playerName, setPlayerName, currentScores, setCurrentScores }}>
			{props.children}
		</RPSContext.Provider>
	);
};

export default RPSContextProvider;
