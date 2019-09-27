import React, { createContext, useReducer } from 'react';
import { RPSReducer } from '../reducers/RPSReducer';

export const RPSContext = createContext();

const initialState = {
	playerName: '',
	choice: { player: null, computer: null }
}

const RPSContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(RPSReducer, initialState);

	return <RPSContext.Provider value={{ state, dispatch }}>{children}</RPSContext.Provider>;
};

export default RPSContextProvider;
