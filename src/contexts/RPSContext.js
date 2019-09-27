import React, { createContext, useReducer, useMemo } from 'react';
import { RPSReducer } from '../reducers/RPSReducer';

export const RPSContext = createContext();

const initialState = {
	playerName: '',
	choice: { playerChoice: null, computerChoice: null },
	scores: { playerScore: 0, computerScore: 0 }
}

const RPSContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(RPSReducer, initialState);

	const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

	return <RPSContext.Provider value={contextValue}>{children}</RPSContext.Provider>
};

export default RPSContextProvider;
