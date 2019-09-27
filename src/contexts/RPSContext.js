import React, { createContext, useReducer } from 'react';
import { RPSReducer } from '../reducers/RPSReducer';

export const RPSContext = createContext();

const initialState = {
	playerName: '',
	choice: { playerChoice: null, computerChoice: null },
	scores: { playerScore: 0, computerScore: 0 }
}

const RPSContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(RPSReducer, initialState);

	return <RPSContext.Provider value={{ state, dispatch }}>{children}</RPSContext.Provider>;
};

export default RPSContextProvider;
