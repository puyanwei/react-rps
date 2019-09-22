import React, { createContext, useState } from 'react';

export const ChoiceContext = createContext();

const ChoiceContextProvider = (props) => {
	const [ choice, setChoice ] = useState({ player: null, computer: null });

	return <ChoiceContext.Provider value={{ choice, setChoice }}>{props.children}</ChoiceContext.Provider>;
};

export default ChoiceContextProvider;
