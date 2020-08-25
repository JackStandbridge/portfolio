const selectLetter = (state, { payload }) => {
	state.letters.entities[payload].selected = true;
	state.letters.raisedOrder.push(payload);
}

export default selectLetter;