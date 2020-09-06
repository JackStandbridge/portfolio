const moveLetter = (state, { payload }) => {
	const { id, toPosition } = payload;

	const index = state.letters.baseOrder.indexOf(id);
	state.letters.baseOrder.splice(index, 1);
	state.letters.baseOrder.splice(toPosition, 0, id);

	return state;
};

export default moveLetter;