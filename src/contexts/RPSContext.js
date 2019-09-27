import React, { createContext, useReducer } from 'react';
import { RPSReducer } from '../reducers/RPSReducer';

export const RPSContext = createContext();

const RPSContextProvider = (props) => {
	const [state, dispatch] = useReducer(RPSReducer, { playerName: '' });

	return <RPSContext.Provider value={{ state, dispatch }}>{props.children}</RPSContext.Provider>;
};

export default RPSContextProvider;
