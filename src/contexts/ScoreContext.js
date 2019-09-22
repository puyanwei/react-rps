import React, { createContext, useState } from 'react';

export const ScoreContext = createContext();

const ScoreContextProvider = (props) => {
	const [ currentScores, setCurrentScores ] = useState({ player: 0, computer: 0 });

	return <ScoreContext.Provider value={{ currentScores, setCurrentScores }}>{props.children}</ScoreContext.Provider>;
};

export default ScoreContextProvider;
