export const RPSReducer = (state, action) => {
	switch (action.type) {
		case 'SET_NAME':
			return { ...state, playerName: action.payload }
		case 'SET_PLAYER_CHOICE':
			return { ...state, choice: { ...state.choice, playerChoice: action.payload } }
		case 'SET_COMPUTER_CHOICE':
			return { ...state, choice: { ...state.choice, computerChoice: action.payload } }
		case 'PLAYER_WINS':
			return { ...state, scores: { ...state.scores, playerScore: state.scores.playerScore + 1 } }
		case 'COMPUTER_WINS':
			return { ...state, scores: { ...state.scores, computerScore: state.scores.computerScore + 1 } }
		default:
			throw new Error();
	}
};
