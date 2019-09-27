export const RPSReducer = (state, action) => {
	switch (action.type) {
		case 'SET_NAME':
			return { ...state, playerName: action.payload }
		case 'SET_PLAYER_CHOICE':
			return { ...state, choice: { ...state.choice, player: action.payload } }
		case 'SET_COMPUTER_CHOICE':
			return { ...state, choice: { ...state.choice, computer: action.payload } }
		default:
			throw new Error();
	}
};
