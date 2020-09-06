const deleteGuess = (state, { payload }) => {
	const index = state.guesses.indexOf(payload);

	state.guesses.splice(index, 1);
};

export default deleteGuess;