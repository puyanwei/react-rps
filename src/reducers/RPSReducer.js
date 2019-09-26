export const RPSReducer = (state, action) => {
	switch (action.type) {
		case 'SET_NAME':
			return { playerName: action };
		default:
			throw new Error();
	}
};
