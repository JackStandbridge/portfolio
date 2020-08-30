const storeGame = (state, { payload }) => {
	state.nextGame.answers = payload.answers;
	state.nextGame.letters = payload.letters;
};

export default storeGame;