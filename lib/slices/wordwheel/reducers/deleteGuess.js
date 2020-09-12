const deleteGuess = (state, { payload }) => {
	const index = state.guesses.indexOf(payload);

	if (index !== -1) {
		state.guesses.splice(index, 1);
	}
};

export default deleteGuess;