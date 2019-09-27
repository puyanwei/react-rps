export const RPSReducer = (state, action) => {
	switch (action.type) {
		case 'SET_NAME':
			console.log({ state }, { action })
			return { playerName: action.payload }
		default:
			throw new Error();
	}
};
