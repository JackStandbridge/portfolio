const resequenceLetters = (state, { payload }) => {
	state.letters.baseOrder = payload;
};

export default resequenceLetters;